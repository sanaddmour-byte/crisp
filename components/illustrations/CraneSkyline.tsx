type IllustrationProps = {
  className?: string;
};

/** Tower crane over a skyline, with an ascending capital tick — Home hero / About. */
export default function CraneSkyline({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 480 480"
      className={className}
      fill="none"
      aria-hidden
    >
      <defs>
        <pattern id="cs-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="#2C4A63" strokeWidth="1" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="480" height="480" fill="url(#cs-grid)" opacity="0.4" />

      {/* Skyline blocks */}
      <rect x="60" y="300" width="60" height="120" stroke="#F5F2ED" strokeWidth="2" opacity="0.75" />
      <rect x="130" y="250" width="60" height="170" stroke="#F5F2ED" strokeWidth="2" opacity="0.75" />
      <rect x="340" y="280" width="70" height="140" stroke="#F5F2ED" strokeWidth="2" opacity="0.75" />
      <path d="M60 420h350" stroke="#F5F2ED" strokeWidth="2" opacity="0.75" strokeLinecap="round" />

      {/* Crane mast */}
      <path d="M235 420V90" stroke="#F5F2ED" strokeWidth="2.5" strokeLinecap="round" opacity="0.95" />
      <path
        d="M235 420l14-24M235 396l-14-24M235 372l14-24M235 348l-14-24M235 324l14-24M235 300l-14-24M235 276l14-24M235 252l-14-24M235 228l14-24M235 204l-14-24"
        stroke="#F5F2ED"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Jib + counter-jib */}
      <path d="M90 100h300" stroke="#F5F2ED" strokeWidth="2.5" strokeLinecap="round" opacity="0.95" />
      <path d="M235 90l-145 10M235 90l100 10" stroke="#F5F2ED" strokeWidth="1.75" opacity="0.7" />
      <path d="M120 110V100M300 110V100" stroke="#F5F2ED" strokeWidth="1.75" opacity="0.7" />

      {/* Hook line + load */}
      <path d="M120 110v70" stroke="#E8590C" strokeWidth="2" strokeDasharray="1 6" strokeLinecap="round" />
      <rect x="104" y="180" width="32" height="22" rx="2" stroke="#E8590C" strokeWidth="2.5" />

      {/* Counterweight */}
      <rect x="290" y="102" width="24" height="16" stroke="#F5F2ED" strokeWidth="2" opacity="0.75" />

      {/* Ascending capital tick */}
      <path
        d="M340 400 L370 350 L395 370 L420 300"
        stroke="#E8590C"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="420" cy="300" r="7" fill="#E8590C" />
    </svg>
  );
}
