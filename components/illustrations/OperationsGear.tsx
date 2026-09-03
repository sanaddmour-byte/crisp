type IllustrationProps = {
  className?: string;
};

/** Plant silo + interlocking gears and a turnaround loop — Corporate Operations. */
export default function OperationsGear({ className = "" }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 480 480"
      className={className}
      fill="none"
      aria-hidden
    >
      <defs>
        <pattern id="og-grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M30 0H0V30" fill="none" stroke="#2C4A63" strokeWidth="1" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="480" height="480" fill="url(#og-grid)" opacity="0.45" />

      {/* Silo */}
      <path
        d="M120 200 L120 340 Q120 370 170 370 Q220 370 220 340 L220 200"
        stroke="#F5F2ED"
        strokeWidth="2.25"
        opacity="0.9"
      />
      <path d="M170 130l50 70h-100z" stroke="#F5F2ED" strokeWidth="2.25" opacity="0.9" />
      <path d="M120 240H220M120 280H220" stroke="#F5F2ED" strokeWidth="1.25" opacity="0.5" />

      {/* Large gear */}
      <g stroke="#E8590C" strokeWidth="2.5" strokeLinecap="round">
        <circle cx="330" cy="230" r="46" />
        <circle cx="330" cy="230" r="14" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI) / 4;
          const x1 = 330 + Math.cos(angle) * 46;
          const y1 = 230 + Math.sin(angle) * 46;
          const x2 = 330 + Math.cos(angle) * 60;
          const y2 = 230 + Math.sin(angle) * 60;
          return <path key={i} d={`M${x1} ${y1} L${x2} ${y2}`} />;
        })}
      </g>

      {/* Small gear, interlocking */}
      <g stroke="#F5F2ED" strokeWidth="2" strokeLinecap="round" opacity="0.85">
        <circle cx="395" cy="290" r="26" />
        <circle cx="395" cy="290" r="8" />
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * Math.PI) / 3;
          const x1 = 395 + Math.cos(angle) * 26;
          const y1 = 290 + Math.sin(angle) * 26;
          const x2 = 395 + Math.cos(angle) * 36;
          const y2 = 290 + Math.sin(angle) * 36;
          return <path key={i} d={`M${x1} ${y1} L${x2} ${y2}`} />;
        })}
      </g>

      {/* Turnaround loop */}
      <path
        d="M270 350a60 60 0 1 0 10-70"
        stroke="#E8590C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 9"
      />
      <path d="M290 268l-12 14 18 4z" fill="#E8590C" stroke="#E8590C" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}
