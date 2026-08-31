"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { contactContent } from "@/content/contact";
import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/SectionReveal";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const { locale } = useLanguage();
  const c = contactContent[locale];

  return (
    <>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
      />

      <section className="bg-charcoal py-24 sm:py-32">
        <div className="container-max section-x grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <SectionReveal>
            <ContactForm data={c.form} />
          </SectionReveal>

          <SectionReveal delayMs={100}>
            <div className="rounded-3xl border border-cream/10 bg-white/[0.02] p-8 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
                {c.directContact.heading}
              </span>
              <p className="mt-4 text-lg font-medium text-cream/85">
                {c.directContact.subheading}
              </p>

              <div className="mt-8 flex flex-col gap-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-cream/45">
                    {c.directContact.emailLabel}
                  </div>
                  <div className="mt-1.5 text-base font-medium text-cream">
                    {c.directContact.email}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-cream/45">
                    {c.directContact.phoneLabel}
                  </div>
                  <div className="mt-1.5 text-base font-medium text-cream">
                    {c.directContact.phone}
                  </div>
                </div>
              </div>

              <p className="mt-8 rounded-xl border border-steel/40 bg-steel/10 px-4 py-3 text-xs leading-relaxed text-cream/55">
                {c.directContact.placeholderNote}
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
