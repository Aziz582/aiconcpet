"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "@/lib/translations";

type TranslationType = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationType;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Check URL params first
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get("lang") as Language | null;

      if (urlLang === "ar" || urlLang === "en") {
        setLanguageState(urlLang);
        document.documentElement.dir = urlLang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = urlLang;
        localStorage.setItem("aiconcpet_lang", urlLang);
        return;
      }

      // Check localStorage
      const saved = localStorage.getItem("aiconcpet_lang") as Language | null;
      if (saved === "ar" || saved === "en") {
        setLanguageState(saved);
        document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = saved;
        return;
      }

      // Default to Arabic if browser is Arabic, otherwise English
      const browserLang = navigator.language?.toLowerCase().startsWith("ar") ? "ar" : "en";
      setLanguageState(browserLang);
      document.documentElement.dir = browserLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = browserLang;
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("aiconcpet_lang", lang);
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "ar" : "en";
    setLanguage(nextLang);
  };

  const t = (translations[language] || translations.en) as TranslationType;
  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        isRTL,
      }}
    >
      <div key={language} dir={isRTL ? "rtl" : "ltr"} className={isRTL ? "font-arabic" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
