"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { corporateOperationsContent } from "@/content/corporateOperations";
import PageHero from "@/components/PageHero";
import CTAButton from "@/components/CTAButton";
import OperationsGear from "@/components/illustrations/OperationsGear";
import {
  DeliverablesSection,
  PersonaSection,
  CommercialSection,
  VerticalCtaSection,
} from "@/components/VerticalSections";

export default function CorporateOperationsPage() {
  const { locale } = useLanguage();
  const c = corporateOperationsContent[locale];

  return (
    <>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        illustration={<OperationsGear className="h-full w-full" />}
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
