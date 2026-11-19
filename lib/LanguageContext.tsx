'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, TranslationContent, translations } from './translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('ta'); // Tamil default

  useEffect(() => {
    try {
      const saved = localStorage.getItem('pb_lang') as Language;
      if (saved === 'ta' || saved === 'en') {
        setLangState(saved);
        document.documentElement.lang = saved;
      } else {
        document.documentElement.lang = 'ta';
      }
    } catch {
      // Fallback for SSR or disabled localStorage
      document.documentElement.lang = 'ta';
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('pb_lang', newLang);
      document.documentElement.lang = newLang;
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    const nextLang = lang === 'ta' ? 'en' : 'ta';
    setLang(nextLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
