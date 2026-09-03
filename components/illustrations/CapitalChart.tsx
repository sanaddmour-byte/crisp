type IllustrationProps = {
  className?: string;
};

/** Ascending capital bars + trend line over a blueprint grid — Capital & Feasibility. */
export default function CapitalChart({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 480 480"
      className={className}
      fill="none"
      aria-hidden
    >
      <defs>
        <pattern id="cc-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="#2C4A63" strokeWidth="1" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="480" height="480" fill="url(#cc-grid)" opacity="0.45" />

      {/* Axis */}
      <path d="M80 380V100" stroke="#F5F2ED" strokeWidth="1.75" strokeLinecap="round" opacity="0.55" />
      <path d="M80 380H400" stroke="#F5F2ED" strokeWidth="1.75" strokeLinecap="round" opacity="0.55" />

      {/* Bars */}
      <rect x="120" y="300" width="34" height="80" rx="2" stroke="#F5F2ED" strokeWidth="2.25" opacity="0.9" />
      <rect x="180" y="250" width="34" height="130" rx="2" stroke="#F5F2ED" strokeWidth="2.25" opacity="0.9" />
      <rect x="240" y="190" width="34" height="190" rx="2" stroke="#F5F2ED" strokeWidth="2.25" opacity="0.9" />
      <rect x="300" y="140" width="34" height="240" rx="2" stroke="#E8590C" strokeWidth="2.5" />

      {/* Trend line + markers */}
      <path
        d="M100 320 L165 270 L230 220 L295 165 L360 120"
        stroke="#E8590C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 10"
      />
      <circle cx="360" cy="120" r="8" stroke="#E8590C" strokeWidth="2.5" />
      <circle cx="360" cy="120" r="3" fill="#E8590C" />
    </svg>
  );
}
