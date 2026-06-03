import Image from "next/image";
import { ButtonSecondary } from "@/components/ui/button-secondary";

/**
 * "Experience the Finest British Craftsmanship" editorial block.
 *
 * Figma:
 *   - Desktop (4508:18531): 2-up images (shorter left, taller right), copy column 21.25rem on the far right.
 *   - Mobile  (4508:18343): 2-up images (short left, tall right), copy stacked below.
 *
 * Tablet follows the mobile-style stack so the copy and images do not compete
 * inside a squeezed desktop row.
 */
export function Craftsmanship() {
  return (
    <section
      aria-labelledby="craft-title"
      className="bg-black px-5 text-white md:px-8 xl:pl-0 xl:pr-12"
    >
      {/*
        Desktop layout starts at xl. Tablet uses the stacked layout below,
        which gives the image pair and copy their own rows.
      */}
      <div className="hidden min-w-0 items-start gap-[clamp(4rem,8.85vw,8.5rem)] xl:grid xl:grid-cols-[minmax(0,1fr)_21.25rem]">
        <div className="grid min-w-0 grid-cols-[minmax(0,510fr)_minmax(0,470fr)] items-start gap-4">
          <div className="relative aspect-[510/640] min-w-0">
            <Image
              src="/products/craftsmanship-1.png"
              alt="Tailor measuring fabric"
              fill
              sizes="(min-width: 1280px) 33vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[470/1000] min-w-0">
            <Image
              src="/products/craftsmanship-2.png"
              alt="Tailor cutting suit fabric in workshop"
              fill
              sizes="(min-width: 1280px) 31vw, 55vw"
              className="object-cover object-bottom"
            />
          </div>
        </div>
        <div className="flex w-full min-w-0 flex-col items-start gap-8">
          <div className="flex flex-col gap-6">
            <h2
              id="craft-title"
              className="w-full text-[3.125rem] font-bold uppercase leading-[1.2]"
              style={{
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.125rem",
                textWrap: "balance",
              }}
            >
              Experience the Finest British Craftsmanship
            </h2>
            <p
              className="max-w-[44ch] text-base leading-[1.5]"
              style={{ fontFamily: "var(--font-roboto)", textWrap: "pretty" }}
            >
              At SUITS U, we take pride in offering a wide selection of business
              suits, black tie evening looks, wedding and prom suits, all made
              with the utmost care and attention to detail in Britain. Experience
              the finest British craftsmanship and elevate your style with our
              quality menswear.
            </p>
          </div>
          <ButtonSecondary
            tone="cream"
            className="w-fit max-w-full justify-center whitespace-normal px-6 py-3 text-center text-base"
          >
            Discover Our Tailoring Services
          </ButtonSecondary>
        </div>
      </div>

      {/* Mobile and tablet layout */}
      <div className="flex flex-col gap-[clamp(2rem,5vw,3rem)] xl:hidden">
        <div className="grid w-full grid-cols-[0.9fr_1.1fr] items-start gap-2 md:gap-4">
          <div className="relative aspect-[510/640] flex-1">
            <Image
              src="/products/craftsmanship-1.png"
              alt="Tailor measuring fabric"
              fill
              sizes="(min-width: 768px) 45vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[510/900] flex-1">
            <Image
              src="/products/craftsmanship-2.png"
              alt="Tailor cutting suit fabric in workshop"
              fill
              sizes="(min-width: 768px) 55vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex max-w-[42rem] flex-col gap-[clamp(1.5rem,4vw,2rem)] pb-4">
          <div className="flex flex-col gap-[clamp(1rem,3vw,1.5rem)]">
            <h2
              className="max-w-[21ch] text-[clamp(2.25rem,6.5vw,3.5rem)] font-bold uppercase leading-[1.08]"
              style={{
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.125rem",
                textWrap: "balance",
              }}
            >
              Experience the Finest British Craftsmanship
            </h2>
            <p
              className="max-w-[50ch] text-[clamp(1rem,2vw,1.125rem)] leading-[1.55]"
              style={{ fontFamily: "var(--font-roboto)", textWrap: "pretty" }}
            >
              At SUITS U, we take pride in offering a wide selection of business
              suits, black tie evening looks, wedding and prom suits, all made
              with the utmost care and attention to detail in Britain. Experience
              the finest British craftsmanship and elevate your style with our
              quality menswear.
            </p>
          </div>
          <ButtonSecondary className="w-full justify-center whitespace-normal px-[clamp(1.25rem,4vw,1.5rem)] py-[clamp(0.625rem,2vw,0.75rem)] text-center text-[clamp(0.875rem,2vw,1rem)] sm:w-fit">
            Discover Our Tailoring Services
          </ButtonSecondary>
        </div>
      </div>
    </section>
  );
}
