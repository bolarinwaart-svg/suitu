import Image from "next/image";

/**
 * Landing hero — full-bleed photo + oversized Arges Condensed Black headline.
 *
 * Figma:
 *   - Desktop: node 4508:24451 — 880px tall, two-line headline 180px, footer 130px.
 *   - Mobile:  node 4508:24461 — 600px tall, headline 70px, footer 40px.
 *
 * Two `<Image>` instances swap via Tailwind responsive utilities so each
 * breakpoint loads only the image it needs. All sizes are in rem.
 */
export function Hero() {
  return (
    <section
      aria-label="Suits U — your perfect suit"
      className="relative h-[calc(100svh-5rem)] min-h-[32rem] w-full overflow-hidden md:h-[calc(100svh-6.5rem)] md:min-h-[36rem] md:max-h-[55rem]"
      style={{ fontFamily: "var(--font-heading)" }}
    >
      {/* Background photo (responsive) */}
      <Image
        src="/hero/hero-mobile-figma.png"
        alt=""
        fill
        priority
        quality={100}
        sizes="(min-width: 120rem) 120rem, 100vw"
        className="object-cover md:hidden"
      />
      <Image
        src="/hero/hero-desktop-figma.png"
        alt=""
        fill
        priority
        quality={100}
        sizes="(min-width: 120rem) 120rem, 100vw"
        className="hidden object-cover md:block"
      />

      {/* Mobile layout — Roman Arges (not the Condensed display face) to match Figma */}
      <div
        className="relative z-10 flex h-full w-full flex-col justify-between gap-8 px-5 py-10 text-white sm:py-14 md:hidden"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <h1 className="max-w-full text-[3.75rem] font-black uppercase leading-[1.05] min-[360px]:text-[4.125rem] sm:text-[4.375rem]">
          Your
          <br />
          Perfect Suit
        </h1>
        <p className="max-w-[23rem] text-[2rem] font-black uppercase leading-[1.08] min-[360px]:text-[2.25rem] sm:text-[2.5rem]">
          Experience quality tailoring
          <br />
          and alteration
        </p>
      </div>

      {/* Desktop layout */}
      <div className="relative z-10 hidden h-full w-full flex-col justify-between gap-8 px-8 py-6 text-white md:flex lg:px-12">
        <h1
          className="max-w-full text-[5.5rem] font-black uppercase leading-[0.92] lg:text-[8rem] xl:text-[10rem] 2xl:text-[11.25rem]"
          style={{ letterSpacing: "0.12em", textWrap: "balance" }}
        >
          Your
          <br />
          Perfect Suit
        </h1>
        <p
          className="max-w-full text-[3.25rem] font-black uppercase leading-[0.96] lg:text-[5.25rem] xl:text-[7rem] 2xl:text-[8.125rem]"
          style={{ textWrap: "balance" }}
        >
          Experience quality tailoring and alteration
        </p>
      </div>
    </section>
  );
}
