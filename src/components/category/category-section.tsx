import { ButtonSecondary } from "@/components/ui/button-secondary";
import { ProductCard } from "./product-card";

type Product = {
  src: string;
  alt: string;
  preorder?: boolean;
};

type CategorySectionProps = {
  title: string;
  products: Product[];
  ctaLabel?: string;
  ctaHref?: string;
};

/**
 * Category strip — 3 product tiles + title block.
 *
 * Figma:
 *   - Desktop (4508:18477): row layout, products fill the left, title column 21.3rem on the right.
 *   - Mobile  (4508:18294): 2-column grid; products fill 3 of 4 cells, title block fills the 4th.
 *
 * Heading is Arges Bold — Roman width (var(--font-heading) at weight 700),
 * not the Condensed wordmark face. Figma "Heading/H2": 60px, letter-spacing 2px.
 */
export function CategorySection({
  title,
  products,
  ctaLabel = "Shop All",
  ctaHref,
}: CategorySectionProps) {
  const [p1, p2, p3] = products;

  return (
    <section className="bg-black text-white">
      {/* ---------- Mobile (< md) ---------- */}
      <div className="md:hidden flex flex-col gap-2 px-5">
        <div className="flex gap-2">
          <ProductCard {...p1} />
          <ProductCard {...p2} />
        </div>
        <div className="flex gap-2 items-center">
          <ProductCard {...p3} />
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <h2
              className="text-[clamp(1.75rem,8vw,2.5rem)] font-bold uppercase leading-[1.1] text-white"
              style={{
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.125rem",
                textWrap: "balance",
              }}
            >
              {title}
            </h2>
            <ButtonSecondary tone="cream" onClick={ctaHref ? undefined : undefined}>
              {ctaLabel}
            </ButtonSecondary>
          </div>
        </div>
      </div>

      {/* ---------- Desktop (≥ md) ---------- */}
      <div className="hidden items-stretch pr-12 md:grid md:grid-cols-[minmax(0,1fr)_clamp(14rem,22vw,21.3125rem)] md:gap-2">
        <div className="flex min-w-0 gap-2">
          <ProductCard {...p1} />
          <ProductCard {...p2} />
          <ProductCard {...p3} />
        </div>
        <div className="flex min-w-0 flex-col items-start justify-center gap-4 pl-[clamp(1.5rem,6vw,7.375rem)]">
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
          <ButtonSecondary tone="cream">{ctaLabel}</ButtonSecondary>
        </div>
      </div>
    </section>
  );
}
