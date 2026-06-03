import Image from "next/image";

type Card = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  href: string;
};

const cards: Card[] = [
  {
    src: "/products/showcase-custom-hires.png",
    alt: "Custom Suits",
    title: "Custom Suits",
    subtitle: "Elevating your corporate wardrobe",
    href: "#",
  },
  {
    src: "/products/showcase-children-hires.png",
    alt: "Children Suits",
    title: "Children Suits",
    subtitle: "Elevating your corporate wardrobe",
    href: "#",
  },
];

export function ShowcasePair() {
  return (
    <section className="flex w-full flex-col gap-2 md:flex-row">
      {cards.map((card, i) => (
        <article
          key={card.title}
          className={[
            "relative flex flex-col overflow-hidden bg-[#f4f4f4]",
            "p-5 md:p-12",
            "aspect-[375/520]",
            "sm:aspect-[752/900] md:aspect-[752/1010] md:flex-1",
          ].join(" ")}
        >
          <Image
            src={card.src}
            alt={card.alt}
            fill
            sizes="(min-width: 48rem) 50vw, 100vw"
            className="object-cover object-top"
            quality={100}
            priority={i === 0}
          />

          {/* Heading sits top-left; tagline bottom-left; SHOP NOW bottom-right.
              The link column reserves width on the right, so the heading wraps
              to two lines (Figma node 4508:18392). */}
          <div className="relative flex flex-1 items-end gap-6">
            <div className="flex h-full flex-1 flex-col items-start justify-between">
              <h3
                className="max-w-[8.5rem] text-[2rem] font-bold uppercase text-black min-[360px]:text-[2.25rem] sm:text-fluid-h2 md:max-w-none"
                style={{
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1.2,
                }}
              >
                {card.title}
              </h3>
              <p
                className="max-w-[10rem] text-black text-[1rem] md:max-w-none"
                style={{
                  fontFamily: "var(--font-roboto)",
                  lineHeight: 1.5,
                }}
              >
                {card.subtitle}
              </p>
            </div>

            <a
              href={card.href}
              className="shrink-0 self-end uppercase text-black underline text-[1rem]"
              style={{
                fontFamily: "var(--font-roboto)",
                lineHeight: 1.5,
              }}
            >
              Shop now
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}
