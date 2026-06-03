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
    <section className="flex w-full flex-col gap-2 bg-black min-[900px]:flex-row">
      {cards.map((card, i) => (
        <article
          key={card.title}
          className={[
            "relative isolate flex overflow-hidden bg-[#f4f4f4]",
            "aspect-[752/1010] p-[clamp(1.25rem,4vw,3rem)]",
            "min-[900px]:flex-1",
          ].join(" ")}
        >
          <Image
            src={card.src}
            alt={card.alt}
            fill
            sizes="(min-width: 64rem) 50vw, 100vw"
            className="object-cover object-top"
            quality={100}
            priority={i === 0}
          />

          <div className="relative z-10 mt-auto grid w-full grid-cols-[minmax(0,1fr)_auto] items-end gap-[clamp(1rem,3vw,2rem)]">
            <div className="flex min-w-0 flex-col items-start gap-[clamp(0.5rem,1.4vw,1rem)]">
              <h3
                className="max-w-[14ch] text-[clamp(1.75rem,3.5vw,3.125rem)] font-bold uppercase text-black"
                style={{
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1.2,
                  letterSpacing: "0",
                }}
              >
                {card.title}
              </h3>
              <p
                className="max-w-[24ch] text-[clamp(0.9375rem,1.35vw,1rem)] text-black"
                style={{
                  fontFamily: "var(--font-roboto)",
                  lineHeight: 1.5,
                  textWrap: "pretty",
                }}
              >
                {card.subtitle}
              </p>
            </div>

            <a
              href={card.href}
              className="shrink-0 self-end whitespace-nowrap uppercase text-black underline text-[clamp(0.9375rem,1.35vw,1rem)]"
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
