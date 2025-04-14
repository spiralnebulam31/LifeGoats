'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const LanguageContext = createContext();

// Define available namespaces
// Add more as you create them
const AVAILABLE_NAMESPACES = ['navbar', 'footer', 'landing-page'];

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [loadedNamespaces, setLoadedNamespaces] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true once the component mounts
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Define loadNamespace as a memoized function to prevent recreating it on each render
  const loadNamespace = useCallback(async (namespace) => {
    if (!isMounted) return {}; // Don't try to load if not mounted
    
    try {
      if (!AVAILABLE_NAMESPACES.includes(namespace)) {
        console.warn(`Namespace "${namespace}" is not in the allowed list. Please add it to AVAILABLE_NAMESPACES.`);
      }
      
      const translationModule = await import(`../locales/${language}/${namespace}.json`);
      const newData = translationModule.default || translationModule;
      
      setTranslations(prev => ({
        ...prev,
        [namespace]: {
          ...(prev[namespace] || {}),
          [language]: newData
        }
      }));
      
      // Track loaded namespaces if not already in the list
      setLoadedNamespaces(prev => 
        prev.includes(namespace) ? prev : [...prev, namespace]
      );
      
      return newData;
    } catch (error) {
      console.error(`Failed to load translations for ${language}/${namespace}:`, error);
      return {};
    }
  }, [language, isMounted]);

  // Initialize translations on first load (runs after mount)
  useEffect(() => {
    if (!isMounted) return; // Skip if not mounted yet
    
    const initialize = async () => {
      try {
        // Check for saved language preference (only if client-side)
        if (typeof window !== 'undefined') {
          const savedLanguage = localStorage.getItem('preferredLanguage');
          if (savedLanguage) {
            setLanguage(savedLanguage);
            return; // Let the language change trigger the loading
          }
        }
        
        // Initial load of essential namespaces
        setIsLoading(true);
        await Promise.all([
          loadNamespace('navbar'),
          loadNamespace('footer')
        ]);
      } catch (err) {
        console.error("Failed to initialize translations:", err);
      } finally {
        setIsLoading(false);
      }
    };
    
    initialize();
  }, [isMounted, loadNamespace]); 

  // Reload translations when language changes
  useEffect(() => {
    if (!isMounted || loadedNamespaces.length === 0) return;
    
    const reloadTranslations = async () => {
      try {
        setIsLoading(true);
        
        // Load all previously loaded namespaces in the new language
        await Promise.all(
          loadedNamespaces.map(namespace => loadNamespace(namespace))
        );
      } catch (error) {
        console.error("Error reloading translations:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    reloadTranslations();
  }, [language, loadNamespace, loadedNamespaces, isMounted]);

  const changeLanguage = useCallback((lang) => {
    if (!isMounted || lang === language) return;
    
    setLanguage(lang);
    // Save to localStorage for persistence (only if client-side)
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang);
    }
  }, [language, isMounted]);

  // Function to get a translation by namespace and key (async)
  const translate = useCallback(async (namespace, key) => {
    // If we don't have this namespace loaded yet, load it
    if (!translations[namespace] || !translations[namespace][language]) {
      await loadNamespace(namespace);
    }
    
    // Return the translation or fallback to the key
    return translations[namespace]?.[language]?.[key] || key;
  }, [language, loadNamespace, translations]);

  // Get a translation synchronously (for components that can't use async)
  const t = useCallback((namespace, key) => {
    // If namespace isn't loaded yet, trigger loading but return key as fallback
    if (!translations[namespace] || !translations[namespace][language]) {
      // Only try to load if mounted
      if (isMounted) {
        loadNamespace(namespace); // Non-awaited call to start loading
      }
      return key;
    }
    return translations[namespace]?.[language]?.[key] || key;
  }, [language, loadNamespace, translations, isMounted]);

  return (
    <LanguageContext.Provider value={{ 
      language, 
      changeLanguage, 
      translate, 
      t,
      loadNamespace,
      isLoading 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}