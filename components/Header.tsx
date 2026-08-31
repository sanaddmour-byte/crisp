"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { brand, headerCta, navLinks } from "@/content/nav";
import LanguageToggle from "./LanguageToggle";
import CTAButton from "./CTAButton";

export default function Header() {
  const { locale } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = navLinks[locale];
  const b = brand[locale];

  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-charcoal/95 backdrop-blur">
      <div className="container-max section-x flex h-20 items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="text-lg font-bold tracking-tight text-cream sm:text-xl">
            {b.name}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-amber sm:text-xs">
            {b.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber ${
                  active ? "text-amber" : "text-cream/85"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageToggle />
          <CTAButton href="/contact" className="!px-5 !py-2.5 !text-sm">
            {headerCta[locale]}
          </CTAButton>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-cream/25 px-3 py-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-5 bg-cream" />
            <span className="h-0.5 w-5 bg-cream" />
            <span className="h-0.5 w-5 bg-cream" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-charcoal lg:hidden">
          <div className="container-max section-x flex flex-col gap-5 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium ${
                  pathname === link.href ? "text-amber" : "text-cream/85"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-2">
              <LanguageToggle />
              <CTAButton href="/contact" className="!px-5 !py-2.5 !text-sm">
                {headerCta[locale]}
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
