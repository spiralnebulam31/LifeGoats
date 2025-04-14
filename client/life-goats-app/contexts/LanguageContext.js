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

  // Define loadNamespace as a memoized function to prevent recreating it on each render
  const loadNamespace = useCallback(async (namespace) => {
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
  }, [language]);

  // Initialize translations on first load (runs once)
  useEffect(() => {
    const initialize = async () => {
      try {
        // Check for saved language preference
        const savedLanguage = localStorage.getItem('preferredLanguage');
        if (savedLanguage) {
          setLanguage(savedLanguage);
          return; // Let the language change trigger the loading
        }
        
        // Initial load of essential namespaces
        setIsLoading(true);
        await Promise.all([
          loadNamespace('navbar'),
          loadNamespace('footer')
        ]);
        setIsLoading(false);
      } catch (err) {
        console.error("Failed to initialize translations:", err);
        setIsLoading(false);
      }
    };
    
    initialize();
    // Empty dependency array ensures this runs only once
  }, []); 

  // Reload translations when language changes
  useEffect(() => {
    const reloadTranslations = async () => {
      if (loadedNamespaces.length === 0) return;
      
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
  }, [language, loadNamespace, loadedNamespaces]);

  const changeLanguage = useCallback((lang) => {
    if (lang !== language) {
      setLanguage(lang);
      // Save to localStorage for persistence
      localStorage.setItem('preferredLanguage', lang);
    }
  }, [language]);

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
      loadNamespace(namespace); // Non-awaited call to start loading
      return key;
    }
    return translations[namespace]?.[language]?.[key] || key;
  }, [language, loadNamespace, translations]);

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