"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { capitalFeasibilityContent } from "@/content/capitalFeasibility";
import PageHero from "@/components/PageHero";
import CTAButton from "@/components/CTAButton";
import CapitalChart from "@/components/illustrations/CapitalChart";
import {
  DeliverablesSection,
  PersonaSection,
  CommercialSection,
  VerticalCtaSection,
} from "@/components/VerticalSections";

export default function CapitalFeasibilityPage() {
  const { locale } = useLanguage();
  const c = capitalFeasibilityContent[locale];

  return (
    <>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        illustration={<CapitalChart className="h-full w-full" />}
      >
        <CTAButton href="/contact">{c.hero.cta}</CTAButton>
      </PageHero>
      <DeliverablesSection data={c.deliverables} />
      <PersonaSection data={c.persona} />
      <CommercialSection data={c.commercial} />
      <VerticalCtaSection data={c.cta} />
    </>
  );
}
