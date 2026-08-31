"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { technicalDueDiligenceContent } from "@/content/technicalDueDiligence";
import PageHero from "@/components/PageHero";
import CTAButton from "@/components/CTAButton";
import SectionReveal from "@/components/SectionReveal";
import CaseScenarios from "@/components/CaseScenarios";
import {
  DeliverablesSection,
  PersonaSection,
  CommercialSection,
  VerticalCtaSection,
} from "@/components/VerticalSections";

export default function TechnicalDueDiligencePage() {
  const { locale } = useLanguage();
  const c = technicalDueDiligenceContent[locale];

  return (
    <>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
      >
        <CTAButton href="/contact">{c.hero.cta}</CTAButton>
      </PageHero>

      <section className="border-b border-cream/10 bg-charcoal pb-24 sm:pb-32">
        <div className="container-max section-x">
          <SectionReveal>
            <div className="rounded-3xl border-l-4 border-amber bg-white/[0.03] p-8 sm:p-12 rtl:border-l-0 rtl:border-r-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
                {c.anchorNote.eyebrow}
              </span>
              <p className="mt-5 text-balance text-2xl font-semibold italic leading-snug text-cream sm:text-3xl">
                &ldquo;{c.anchorNote.quote}&rdquo;
              </p>
              <p className="mt-5 text-sm font-medium text-cream/50">
                {c.anchorNote.attribution}
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <DeliverablesSection data={c.deliverables} />
      <PersonaSection data={c.persona} />
      <CaseScenarios data={c.caseStudies} />
      <CommercialSection data={c.commercial} />
      <VerticalCtaSection data={c.cta} />
    </>
  );
}
