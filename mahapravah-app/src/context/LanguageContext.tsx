import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Language, Translations } from '../translations';
import { translations } from '../translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: Translations;
  isMarathi: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with Marathi by default or persisted preference
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('mahapravah_lang');
      if (saved === 'mr' || saved === 'en') return saved;
    } catch (e) {
      // Ignore storage errors
    }
    return 'en'; // Default English as it was originally
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('mahapravah_lang', newLang);
    } catch (e) {
      // Ignore storage errors
    }
  };

  const toggleLang = () => {
    setLang(lang === 'mr' ? 'en' : 'mr');
  };

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    if (lang === 'mr') {
      document.body.classList.add('lang-mr');
      document.body.classList.remove('lang-en');
    } else {
      document.body.classList.remove('lang-mr');
      document.body.classList.add('lang-en');
    }
  }, [lang]);

  const value: LanguageContextType = {
    lang,
    setLang,
    toggleLang,
    t: translations[lang],
    isMarathi: lang === 'mr',
  };

  return (
    <LanguageContext.Provider value={value}>
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
