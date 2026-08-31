"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY, Locale } from "./i18n";

type LanguageContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

function applyDocumentLocale(locale: Locale) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY) as
      | Locale
      | null;
    const initial = stored === "ar" || stored === "en" ? stored : DEFAULT_LOCALE;
    setLocaleState(initial);
    applyDocumentLocale(initial);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    applyDocumentLocale(next);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next: Locale = prev === "en" ? "ar" : "en";
      applyDocumentLocale(next);
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      dir: locale === "ar" ? "rtl" : "ltr",
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
