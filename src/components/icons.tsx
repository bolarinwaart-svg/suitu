import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true" focusable="false">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true" focusable="false">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function BookmarkIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true" focusable="false">
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true" focusable="false">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true" focusable="false">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true" focusable="false">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true" focusable="false">
      <path d="M4 4h3.5l4.2 6 4.8-6H20l-6.6 8 7 8h-3.5l-4.5-6.3L7 20H4l7-8.4z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg {...base} {...props} aria-hidden="true" focusable="false">
      <path d="M22 8.2a2.6 2.6 0 0 0-1.8-1.8C18.5 6 12 6 12 6s-6.5 0-8.2.4A2.6 2.6 0 0 0 2 8.2 27 27 0 0 0 1.6 12 27 27 0 0 0 2 15.8a2.6 2.6 0 0 0 1.8 1.8C5.5 18 12 18 12 18s6.5 0 8.2-.4a2.6 2.6 0 0 0 1.8-1.8 27 27 0 0 0 .4-3.8 27 27 0 0 0-.4-3.8z" />
      <path d="m10 9.5 5 2.5-5 2.5z" />
    </svg>
  );
}
