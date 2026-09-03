type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Ascending bar chart with a trend line — Capital & Feasibility. */
export function IconCapital({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M4 20V14" />
      <path d="M10 20V10" />
      <path d="M16 20V6" />
      <path d="M20 20V3" />
      <path d="M4 11l6-4 6 3 4-6" strokeOpacity="0.55" />
    </svg>
  );
}

/** Elevation drawing with a review loupe — Technical Due Diligence. */
export function IconBlueprint({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M4 20V6a1 1 0 0 1 1-1h7l3 3h5a1 1 0 0 1 1 1v11" />
      <path d="M4 20h16" />
      <path d="M8 20v-6h4v6" />
      <circle cx="16.5" cy="15.5" r="3" />
      <path d="M18.7 17.7 21 20" />
    </svg>
  );
}

/** Interlocking gears with a turnaround arrow — Corporate Operations. */
export function IconOperations({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <circle cx="9" cy="14" r="3.2" />
      <path d="M9 9.2V8M9 20v-1.2M12.8 14H14M4 14h1.2M6.6 11.6l-.9-.9M11.4 16.4l.9.9M11.4 11.6l.9-.9M6.6 16.4l-.9.9" />
      <path d="M16 6a3 3 0 1 1-2.7 4.3" />
      <path d="M16 3.2V6M18.5 4.5 16 6" />
    </svg>
  );
}
