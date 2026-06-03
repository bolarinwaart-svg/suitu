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
      {/* Mobile + tablet: 2x2 grid. Desktop strip starts at xl. */}
      <div className="grid grid-cols-2 gap-2 px-5 md:px-8 xl:hidden">
        {products.map((product) => (
          <div
            key={product.src}
            className="relative aspect-[330/470] overflow-hidden"
          >
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
                className="absolute left-3 top-3 text-[clamp(0.75rem,1.4vw,0.875rem)] uppercase text-black"
                style={{ fontFamily: "var(--font-roboto)", lineHeight: 1.5 }}
              >
                {product.badge}
              </span>
            )}
          </div>
        ))}
        <div className="flex min-w-0 flex-col items-center justify-center gap-[clamp(1rem,3vw,1.5rem)] text-center">
          <h2
            className="text-[clamp(2rem,6vw,3.125rem)] font-bold uppercase leading-[1.08]"
            style={{
              fontFamily: "var(--font-heading)",
              letterSpacing: "0.125rem",
              textWrap: "balance",
            }}
          >
            New Suits
          </h2>
          <ButtonSecondary
            tone="cream"
            className="max-w-full justify-center px-[clamp(1.25rem,3vw,1.5rem)] py-[clamp(0.625rem,2vw,0.75rem)] text-[clamp(0.875rem,2vw,1rem)]"
          >
            Shop All
          </ButtonSecondary>
        </div>
      </div>

      <div className="hidden pl-12 xl:flex">
        <div className="flex w-[clamp(16rem,22vw,21.3125rem)] shrink-0 flex-col items-center justify-center gap-[clamp(1rem,2vw,1.5rem)]">
          <h2
            className="text-[clamp(2.5rem,4vw,3.125rem)] font-bold uppercase leading-[1.08]"
            style={{
              fontFamily: "var(--font-heading)",
              letterSpacing: "0.125rem",
              textWrap: "balance",
            }}
          >
            New Suits
          </h2>
          <ButtonSecondary
            tone="cream"
            className="px-[clamp(1.25rem,2vw,1.5rem)] py-[clamp(0.625rem,1vw,0.75rem)] text-[clamp(0.875rem,1.2vw,1rem)]"
          >
            Shop All
          </ButtonSecondary>
        </div>
        <div className="ml-[clamp(2rem,calc(15vw-5rem),8.5625rem)] flex flex-1 gap-2">
          {products.map((product) => (
            <div key={product.src} className="relative aspect-[323/470] flex-1">
              <Image
                src={product.src}
                alt={product.alt}
                fill
                sizes="(min-width: 120rem) 24rem, (min-width: 1280px) 22vw, 50vw"
                className="object-cover"
                quality={100}
              />
              {product.badge && (
                <span
                  className="absolute left-4 top-4 text-[clamp(0.75rem,0.9vw,0.875rem)] uppercase text-black"
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
