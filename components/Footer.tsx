"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { brand, footerContent, navLinks } from "@/content/nav";
import LanguageToggle from "./LanguageToggle";

export default function Footer() {
  const { locale } = useLanguage();
  const f = footerContent[locale];
  const b = brand[locale];
  const links = navLinks[locale];

  return (
    <footer className="border-t border-cream/10 bg-charcoal">
      <div className="container-max section-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <div className="text-lg font-bold text-cream">{b.name}</div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/60">
            {f.blurb}
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-cream/45">
            {f.navHeading}
          </div>
          <ul className="mt-4 flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/75 transition-colors hover:text-amber"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-cream/45">
            {f.contactHeading}
          </div>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-cream/75">
            <li>
              {f.email}{" "}
              <span className="text-cream/35">{f.placeholderNote}</span>
            </li>
            <li>
              {f.phone}{" "}
              <span className="text-cream/35">{f.placeholderNote}</span>
            </li>
          </ul>
          <div className="mt-6">
            <LanguageToggle />
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-max section-x flex flex-col gap-2 py-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <span>{f.rights}</span>
        </div>
      </div>
    </footer>
  );
}
