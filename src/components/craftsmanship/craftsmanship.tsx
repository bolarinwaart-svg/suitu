import Image from "next/image";
import { ButtonSecondary } from "@/components/ui/button-secondary";

/**
 * "Experience the Finest British Craftsmanship" editorial block.
 *
 * Figma:
 *   - Desktop (4508:18531): 2-up images (shorter left, taller right), copy column 21.25rem on the far right.
 *   - Mobile  (4508:18343): 2-up images (short left, tall right), copy stacked below.
 *
 * The taller right image extends beyond the row in Figma — kept as-is.
 */
export function Craftsmanship() {
  return (
    <section
      aria-labelledby="craft-title"
      className="bg-black text-white px-5 md:pl-0 md:pr-12"
    >
      {/*
        Desktop layout. The gap and the left image are fluid so the row fits
        the tablet band (768–1023px) without overflow, then settles to the
        Figma composition at ~1440px. The left image shrinks via flex (was a
        fixed 510px `shrink-0`, the source of the tablet horizontal scroll).
      */}
      <div className="hidden md:flex gap-[clamp(2rem,calc(15vw-5rem),8.5rem)] items-start min-w-0">
        <div className="flex w-[61.625rem] min-w-0 max-w-full gap-4 items-start justify-center">
          <div className="relative aspect-[510/640] w-[31.875rem] min-w-0 shrink">
            <Image
              src="/products/craftsmanship-1.png"
              alt="Tailor measuring fabric"
              fill
              sizes="(min-width: 1024px) 32rem, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-[62.5rem] min-w-0 flex-1">
            <Image
              src="/products/craftsmanship-2.png"
              alt="Tailor cutting suit fabric in workshop"
              fill
              sizes="40vw"
              className="object-cover object-bottom"
            />
          </div>
        </div>
        <div className="flex w-[21.25rem] shrink-0 flex-col items-start gap-8 self-stretch">
          <div className="flex flex-col gap-6">
            <h2
              id="craft-title"
              className="text-fluid-h2-inv font-bold uppercase leading-[1.2]"
              style={{
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.125rem",
              }}
            >
              Experience the Finest British Craftsmanship
            </h2>
            <p
              className="text-base leading-[1.5]"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              At SUITS U, we take pride in offering a wide selection of business
              suits, black tie evening looks, wedding and prom suits, all made
              with the utmost care and attention to detail in Britain. Experience
              the finest British craftsmanship and elevate your style with our
              quality menswear.
            </p>
          </div>
          <ButtonSecondary tone="cream">
            Discover Our Tailoring Services
          </ButtonSecondary>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col gap-8">
        <div className="flex w-full gap-2 items-start">
          <div className="relative aspect-[510/640] flex-1">
            <Image
              src="/products/craftsmanship-1.png"
              alt="Tailor measuring fabric"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[510/900] flex-1">
            <Image
              src="/products/craftsmanship-2.png"
              alt="Tailor cutting suit fabric in workshop"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 pb-4">
          <div className="flex flex-col gap-6">
            <h2
              className="text-fluid-h2-inv font-bold uppercase leading-[1.2]"
              style={{
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.125rem",
              }}
            >
              Experience the Finest British Craftsmanship
            </h2>
            <p
              className="text-base leading-[1.5]"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              At SUITS U, we take pride in offering a wide selection of business
              suits, black tie evening looks, wedding and prom suits, all made
              with the utmost care and attention to detail in Britain. Experience
              the finest British craftsmanship and elevate your style with our
              quality menswear.
            </p>
          </div>
          <ButtonSecondary className="w-full justify-center whitespace-nowrap">
            Discover Our Tailoring Services
          </ButtonSecondary>
        </div>
      </div>
    </section>
  );
}
