type IllustrationProps = {
  className?: string;
};

/** Building elevation under review, with dimension ticks and a red-flag pennant — Technical Due Diligence. */
export default function BlueprintReview({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 480 480"
      className={className}
      fill="none"
      aria-hidden
    >
      <defs>
        <pattern id="bp-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="#2C4A63" strokeWidth="1" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="480" height="480" fill="url(#bp-grid)" opacity="0.3" />

      {/* Elevation outline */}
      <rect x="110" y="120" width="200" height="240" stroke="#FFFFFF" strokeWidth="2.5" />
      <path d="M110 170H310M110 220H310M110 270H310M110 320H310" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.7" />
      <path d="M160 120V360M210 120V360M260 120V360" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.7" />

      {/* Dimension ticks */}
      <path d="M110 380h200M110 375v10M310 375v10" stroke="#FFFFFF" strokeWidth="1.75" opacity="0.85" />
      <path d="M85 120v240M80 120h10M80 360h10" stroke="#FFFFFF" strokeWidth="1.75" opacity="0.85" />

      {/* Review loupe */}
      <circle cx="290" cy="230" r="58" stroke="#E8590C" strokeWidth="3" />
      <path d="M331 271l38 38" stroke="#E8590C" strokeWidth="3" strokeLinecap="round" />
      <path d="M262 230l18 18 36-40" stroke="#E8590C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* Red-flag pennant */}
      <path d="M370 120v90" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M370 120l34 14-34 14z" stroke="#E8590C" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
