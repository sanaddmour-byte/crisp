import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm sm:text-base font-semibold tracking-tight transition-all duration-200";

  const variants = {
    primary:
      "bg-amber text-cream hover:bg-amber/90 hover:-translate-y-0.5 shadow-[0_0_0_1px_rgba(232,89,12,0.3)]",
    outline:
      "border border-cream/30 text-cream hover:border-amber hover:text-amber",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
