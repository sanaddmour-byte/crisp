"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label="Toggle language / تبديل اللغة"
      className={`inline-flex items-center gap-1.5 rounded-full border border-cream/25 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-cream/80 transition-colors hover:border-amber hover:text-amber ${className}`}
    >
      <span className={locale === "en" ? "text-amber" : ""}>EN</span>
      <span className="text-cream/30">/</span>
      <span className={locale === "ar" ? "text-amber" : ""}>عربي</span>
    </button>
  );
}
