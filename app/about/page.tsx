"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { aboutContent } from "@/content/about";
import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/SectionReveal";
import { VerticalCtaSection } from "@/components/VerticalSections";
import CraneSkyline from "@/components/illustrations/CraneSkyline";

export default function AboutPage() {
  const { locale } = useLanguage();
  const c = aboutContent[locale];

  return (
    <>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        illustration={<CraneSkyline className="h-full w-full" />}
      />

      {/* Founder bio */}
      <section className="border-b border-cream/10 bg-charcoal py-24 sm:py-32">
        <div className="container-max section-x grid gap-14 lg:grid-cols-[1fr_0.8fr]">
          <SectionReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              {c.bio.heading}
            </span>
            <div className="mt-6 flex flex-col gap-5">
              {c.bio.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-balance text-lg leading-relaxed text-cream/75"
                >
                  {p}
                </p>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delayMs={100}>
            <div className="rounded-3xl border border-cream/10 bg-white/[0.02] p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.14em] text-cream/45">
                {c.credentials.heading}
              </div>
              <p className="mt-2 text-base font-medium text-cream/85">
                {c.credentials.subheading}
              </p>
              <ul className="mt-7 flex flex-col gap-5">
                {c.credentials.items.map((item) => (
                  <li key={item.title} className="border-t border-cream/10 pt-5 first:border-t-0 first:pt-0">
                    <div className="text-sm font-bold text-amber">{item.title}</div>
                    <p className="mt-1.5 text-sm leading-relaxed text-cream/65">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-b border-cream/10 bg-white/[0.02] py-24 sm:py-32">
        <div className="container-max section-x">
          <SectionReveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              {c.philosophy.eyebrow}
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-cream sm:text-4xl">
              {c.philosophy.title}
            </h2>
            <p className="mt-5 text-balance text-lg leading-relaxed text-cream/70">
              {c.philosophy.body}
            </p>
          </SectionReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {c.philosophy.points.map((point, i) => (
              <SectionReveal key={point.title} delayMs={i * 100}>
                <div className="h-full rounded-2xl border border-cream/10 bg-charcoal p-7">
                  <h3 className="text-lg font-bold text-cream">{point.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/65">
                    {point.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <VerticalCtaSection data={c.cta} />
    </>
  );
}
