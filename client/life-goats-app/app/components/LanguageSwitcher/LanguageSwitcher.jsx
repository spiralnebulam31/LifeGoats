'use client';

import { useLanguage } from '../../../contexts/LanguageContext';
import { useEffect } from 'react';

export default function LanguageSwitcher() {
  const { language, changeLanguage, loadNamespace } = useLanguage();

  // Load navbar translations when the component mounts
  useEffect(() => {
    loadNamespace('navbar');
  }, [loadNamespace]);

  return (
    <div className="language-switcher inline-flex rounded-xl overflow-hidden border-primary border-2 ml-10 my-auto">
      <button
        onClick={() => changeLanguage('en')}
        className={`
          ${language === 'en' ? 'bg-primary text-background' : 'bg-background text-primary'}
          font-links uppercase cursor-pointer font-bold text-md no-underline 
          hover:bg-secondary hover:text-background py-2 px-4 transition-colors
          outline-none rounded-l-lg rounded-r-none 
        `}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('gr')}
        className={`
          ${language === 'en' ? 'bg-background text-primary' : 'bg-primary text-background'}
          font-links uppercase cursor-pointer font-bold text-md no-underline 
          hover:bg-secondary hover:text-background py-2 px-4 transition-colors
          outline-none rounded-r-lg rounded-l-none 
        `}
      >
        GR
      </button>
    </div>
  );
}