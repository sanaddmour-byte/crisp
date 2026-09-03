"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { homeContent } from "@/content/home";
import CTAButton from "@/components/CTAButton";
import SectionReveal from "@/components/SectionReveal";
import CraneSkyline from "@/components/illustrations/CraneSkyline";
import { IconCapital, IconBlueprint, IconOperations } from "@/components/icons";

const verticalIcons = [IconCapital, IconBlueprint, IconOperations];

export default function HomePage() {
  const { locale } = useLanguage();
  const c = homeContent[locale];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-cream/10 bg-charcoal">
        <div
          className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-amber/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-[-10rem] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-steel/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[460px] items-center justify-center text-cream lg:flex xl:w-[560px] rtl:right-auto rtl:left-0"
          aria-hidden
        >
          <CraneSkyline className="h-full w-full" />
        </div>
        <div className="container-max section-x relative py-24 sm:py-32 lg:py-40">
          <SectionReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              {c.hero.eyebrow}
            </span>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.06] tracking-tight text-cream sm:text-5xl lg:text-7xl">
              {c.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-balance text-lg leading-relaxed text-cream/70 sm:text-xl">
              {c.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CTAButton href="/contact">{c.hero.ctaPrimary}</CTAButton>
              <CTAButton href="#verticals" variant="outline">
                {c.hero.ctaSecondary}
              </CTAButton>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Verticals */}
      <section id="verticals" className="border-b border-cream/10 bg-charcoal py-24 sm:py-32">
        <div className="container-max section-x">
          <SectionReveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              {c.verticalsHeading.eyebrow}
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-cream sm:text-4xl lg:text-5xl">
              {c.verticalsHeading.title}
            </h2>
            <p className="mt-5 text-balance text-lg leading-relaxed text-cream/70">
              {c.verticalsHeading.subtitle}
            </p>
          </SectionReveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {c.verticals.map((v, i) => {
              const Icon = verticalIcons[i];
              return (
              <SectionReveal key={v.href} delayMs={i * 100}>
                <Link
                  href={v.href}
                  className="group flex h-full flex-col rounded-2xl border border-cream/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-amber/50 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-amber">{v.tag}</span>
                    {Icon && (
                      <Icon className="h-7 w-7 text-cream/40 transition-colors duration-300 group-hover:text-amber" />
                    )}
                  </div>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-cream">
                    {v.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/65">
                    {v.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber">
                    {v.linkLabel}
                    <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180">
                      →
                    </span>
                  </span>
                </Link>
              </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="border-b border-cream/10 bg-white/[0.02] py-24 sm:py-32">
        <div className="container-max section-x">
          <SectionReveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              {c.howWeWork.eyebrow}
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-cream sm:text-4xl lg:text-5xl">
              {c.howWeWork.title}
            </h2>
            <p className="mt-5 text-balance text-lg leading-relaxed text-cream/70">
              {c.howWeWork.subtitle}
            </p>
          </SectionReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {c.howWeWork.steps.map((step, i) => (
              <SectionReveal key={step.title} delayMs={i * 100}>
                <div className="h-full rounded-2xl border border-steel/40 bg-steel/10 p-7">
                  <h3 className="text-lg font-bold text-cream">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/65">
                    {step.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delayMs={300}>
            <p className="mt-10 max-w-2xl text-sm italic leading-relaxed text-cream/50">
              {c.howWeWork.disclaimer}
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Founder strip */}
      <section className="border-b border-cream/10 bg-charcoal py-24 sm:py-32">
        <div className="container-max section-x">
          <SectionReveal>
            <div className="grid gap-10 rounded-3xl border border-cream/10 bg-white/[0.02] p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:p-16">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
                  {c.founder.eyebrow}
                </span>
                <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-cream sm:text-4xl">
                  {c.founder.title}
                </h2>
                <p className="mt-5 text-balance text-lg leading-relaxed text-cream/70">
                  {c.founder.body}
                </p>
                <div className="mt-8">
                  <CTAButton href="/about" variant="outline">
                    {c.founder.cta}
                  </CTAButton>
                </div>
              </div>
              <ul className="flex flex-col gap-4 self-center">
                {c.founder.credentials.map((cred) => (
                  <li
                    key={cred}
                    className="flex items-center gap-3 rounded-xl border border-cream/10 bg-charcoal px-5 py-4 text-sm font-medium text-cream/85"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-amber" />
                    {cred}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-charcoal py-24 sm:py-32">
        <div className="container-max section-x">
          <SectionReveal className="flex flex-col items-start gap-8 rounded-3xl bg-amber px-8 py-14 sm:px-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="max-w-xl text-balance text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                {c.finalCta.title}
              </h2>
              <p className="mt-4 max-w-lg text-balance text-lg leading-relaxed text-charcoal/80">
                {c.finalCta.subtitle}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-charcoal px-8 py-4 text-base font-semibold text-cream transition-transform duration-200 hover:-translate-y-0.5"
            >
              {c.finalCta.cta}
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
