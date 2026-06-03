import Image from "next/image";
import { ButtonSecondary } from "@/components/ui/button-secondary";

type BestSellersProps = {
  title?: string;
  body?: string;
  ctaLabel?: string;
  images?: { src: string; alt: string }[];
};

const defaultImages = [
  { src: "/products/best-seller-card-1.png", alt: "Black double-breasted suit on model" },
  { src: "/products/best-seller-card-2.png", alt: "Light grey three-piece suit on model" },
  { src: "/products/best-seller-card-3.png", alt: "Navy three-piece suit on model" },
];

/**
 * Best Sellers — 3 product photos + title/body/CTA.
 *
 * Figma:
 *   - Desktop (4508:18759): 3-up image row; copy column sits below, 31.875rem wide, pl-12 pb-8.
 *   - Mobile  (4508:18333): images stack vertically; copy block under the stack, px-5 py-6.
 *
 * Note the title sizes are intentionally inverted from CategorySection — Figma
 * sets desktop H3 (3.125rem) and mobile H2-Mobile (3.75rem). Don't "correct"
 * this; matching Figma is the rule.
 */
export function BestSellers({
  title = "Best Sellers",
  body = "Discover our most beloved suits for all occasions and more items to upgrade your wardrobe.",
  ctaLabel = "Explore Popular Styles",
  images = defaultImages,
}: BestSellersProps) {
  return (
    <section className="bg-black text-white">
      {/* Image strip — row on desktop, stack on mobile */}
      <div className="flex flex-col gap-2 md:flex-row md:items-stretch">
        {images.map((img, i) => (
          <div
            key={img.src}
            className="relative aspect-[499/650] w-full sm:aspect-[499/760] md:aspect-[499/955] md:flex-1"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
              quality={100}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Copy block */}
      <div className="flex max-w-[min(100%,34rem)] flex-col gap-[clamp(1rem,2vw,1.5rem)] px-5 py-6 md:px-12 md:pb-8 md:pt-8">
        <h2
          className="text-[clamp(2.5rem,4vw,3.75rem)] font-bold uppercase leading-[1.05] text-white"
          style={{
            fontFamily: "var(--font-heading)",
            letterSpacing: "0.125rem",
            textWrap: "balance",
          }}
        >
          {title}
        </h2>
        <p
          className="max-w-[31ch] text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.5] text-white lg:max-w-[40ch]"
          style={{ fontFamily: "var(--font-roboto)", textWrap: "pretty" }}
        >
          {body}
        </p>
        <div className="pt-[clamp(0.25rem,1vw,1rem)] md:pt-0">
          <ButtonSecondary
            tone="cream"
            className="max-w-full justify-center px-[clamp(1.25rem,2vw,1.5rem)] py-[clamp(0.625rem,1vw,0.75rem)] text-[clamp(0.875rem,1.2vw,1rem)] text-center"
          >
            {ctaLabel}
          </ButtonSecondary>
        </div>
      </div>
    </section>
  );
}
