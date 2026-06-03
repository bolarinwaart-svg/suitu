import Image from "next/image";
import { ButtonSecondary } from "@/components/ui/button-secondary";

const products = [
  {
    src: "/products/new-suit-hires-1.png",
    alt: "Blue three-piece new suit",
    badge: "New",
  },
  { src: "/products/new-suit-hires-2.png", alt: "Light grey new suit" },
  { src: "/products/new-suit-hires-3.png", alt: "Cream new suit" },
];

/**
 * New Suits strip.
 *
 * Figma desktop: node 4508:18558. The title block sits on the left,
 * then three 323px product cards with 8px gutters.
 */
export function NewSuitsSection() {
  return (
    <section className="bg-black text-white">
      {/* Mobile (< md): 2×2 grid — two cards on top, third card + title block below
          (Figma node 4508:18357). Half-width portrait cells keep the suits uncropped. */}
      <div className="flex flex-col gap-2 px-5 md:hidden">
        {/* Row 1: first two products */}
        <div className="flex gap-2">
          {products.slice(0, 2).map((product) => (
            <div key={product.src} className="relative aspect-[330/470] flex-1 overflow-hidden">
              <Image
                src={product.src}
                alt={product.alt}
                fill
                sizes="50vw"
                className="object-cover"
                quality={100}
              />
              {product.badge && (
                <span
                  className="absolute left-3 top-3 text-xs uppercase text-black"
                  style={{ fontFamily: "var(--font-roboto)", lineHeight: 1.5 }}
                >
                  {product.badge}
                </span>
              )}
            </div>
          ))}
        </div>
        {/* Row 2: third product + title/CTA block */}
        <div className="flex items-center gap-2">
          <div className="relative aspect-[330/470] flex-1 overflow-hidden">
            <Image
              src={products[2].src}
              alt={products[2].alt}
              fill
              sizes="50vw"
              className="object-cover"
              quality={100}
            />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <h2
              className="text-[2rem] font-bold uppercase leading-[1.1] min-[360px]:text-[2.25rem] sm:text-fluid-h2-50"
              style={{
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.125rem",
              }}
            >
              New Suits
            </h2>
            <ButtonSecondary tone="cream">Shop All</ButtonSecondary>
          </div>
        </div>
      </div>

      <div className="hidden pl-12 md:flex">
        <div className="flex w-[21.3125rem] shrink-0 flex-col items-center justify-center gap-4">
          <h2
            className="text-fluid-h2-50 font-bold uppercase leading-[1.2]"
            style={{
              fontFamily: "var(--font-heading)",
              letterSpacing: "0.125rem",
            }}
          >
            New Suits
          </h2>
          <ButtonSecondary tone="cream">Shop All</ButtonSecondary>
        </div>
        <div className="ml-[clamp(2rem,calc(15vw-5rem),8.5625rem)] flex flex-1 gap-2">
          {products.map((product) => (
            <div key={product.src} className="relative aspect-[323/470] flex-1">
              <Image
                src={product.src}
                alt={product.alt}
                fill
                sizes="(min-width: 768px) 22vw, 100vw"
                className="object-cover"
                quality={100}
              />
              {product.badge && (
                <span
                  className="absolute left-4 top-4 text-lg uppercase text-black"
                  style={{ fontFamily: "var(--font-roboto)", lineHeight: 1.5 }}
                >
                  {product.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
