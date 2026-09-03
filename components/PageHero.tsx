import SectionReveal from "./SectionReveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  illustration?: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  illustration,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-cream/10 bg-charcoal pb-20 pt-16 sm:pt-24">
      {illustration && (
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[420px] items-center justify-center text-cream lg:flex xl:w-[480px] rtl:right-auto rtl:left-0"
          aria-hidden
        >
          {illustration}
        </div>
      )}
      <div className="container-max section-x relative z-10">
        <SectionReveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
            {eyebrow}
          </span>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-cream sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-cream/70 sm:text-xl">
            {subtitle}
          </p>
          {children && <div className="mt-9">{children}</div>}
        </SectionReveal>
      </div>
    </section>
  );
}
