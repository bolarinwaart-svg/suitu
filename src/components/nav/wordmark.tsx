type WordmarkProps = {
  /**
   * Tailwind classes for size + line-height. Required because the Figma
   * design uses different line-heights per breakpoint (desktop 0.8, mobile 1.2).
   * Example: `text-[3.125rem] leading-[0.8]`.
   */
  className?: string;
};

/**
 * Brand wordmark. Renders with the --font-display cascade
 * (Arges → Anton → Impact → sans-serif).
 *
 * Figma source: always rendered uppercase as "SUITS U" with letter-spacing 0.
 */
export function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <span
      className={`font-bold uppercase text-white ${className}`}
      style={{ fontFamily: "var(--font-display)", letterSpacing: 0 }}
    >
      SUITS U
    </span>
  );
}
