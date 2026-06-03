import type { ComponentPropsWithoutRef } from "react";

type ButtonSecondaryProps = ComponentPropsWithoutRef<"button"> & {
  /** Optional override for the visual treatment (border + text color). */
  tone?: "white" | "cream";
};

/**
 * Outline button — Roboto 16px / 1rem, uppercase, square corners.
 * Figma component: "Style=Secondary, Small=False, Dark mode=False, Icon position=No icon"
 * Padding: 1.5rem × 0.75rem (24px × 12px).
 */
export function ButtonSecondary({
  tone = "white",
  className = "",
  children,
  ...rest
}: ButtonSecondaryProps) {
  const borderColor = tone === "cream" ? "border-cream" : "border-white";
  const textColor = tone === "cream" ? "text-cream" : "text-white";
  return (
    <button
      type="button"
      className={`inline-flex items-center border ${borderColor} ${textColor} px-6 py-3 text-base uppercase leading-[1.5] hover:opacity-80 active:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
      style={{ fontFamily: "var(--font-roboto)" }}
      {...rest}
    >
      {children}
    </button>
  );
}
