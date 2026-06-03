import Image from "next/image";
import { ButtonSecondary } from "@/components/ui/button-secondary";

const IMAGE_SRC = "/products/cta-image.jpg";
const STORES = ["London", "Cambridge", "Manchester"] as const;

/**
 * CTA section — newsletter signup + "Visit Our Stores".
 * Figma: 4508:18638 (desktop), 4508:19200 (mobile). Breakpoint swap at md.
 */
export function Cta() {
  return (
    <section
      className="bg-[#202020] px-5 py-[3.75rem] md:px-12 md:py-[6.25rem]"
      style={{ fontFamily: "var(--font-roboto)" }}
    >
      {/* ---------- MOBILE ---------- */}
      <div className="flex flex-col gap-8 md:hidden">
        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h2
            className="text-fluid-cta font-bold uppercase leading-[1.2] text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Subscribe to SUITS U for exclusive updates.
          </h2>
          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            className="w-full border border-white bg-cream p-3 text-base uppercase text-black placeholder:uppercase placeholder:text-gray-400"
            style={{ fontFamily: "var(--font-roboto)" }}
          />
          <ButtonSecondary tone="cream" className="w-full justify-center">
            Join Email List
          </ButtonSecondary>
          <p className="text-xs leading-[1.5] text-white">
            By joining, you agree to our Terms and Conditions.
          </p>
        </div>

        {/* Visit Our Stores */}
        <div className="flex flex-col gap-6 border-l border-white pl-4">
          <div className="relative aspect-[335/321] w-full overflow-hidden">
            <Image
              src={IMAGE_SRC}
              alt="Visit our stores"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <h2
            className="text-fluid-cta font-bold uppercase leading-[1.2] text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Visit Our Stores
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="inline-flex items-center justify-center border border-white bg-white px-6 py-3 text-base uppercase leading-[1.5] text-black"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              Maidstone
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center border border-cream bg-transparent px-6 py-3 text-base uppercase leading-[1.5] text-white"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              London
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center border border-cream bg-transparent px-6 py-3 text-base uppercase leading-[1.5] text-cream"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              Cambridge
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center border border-cream bg-transparent px-6 py-3 text-base uppercase leading-[1.5] text-cream"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              Manchester
            </button>
          </div>
        </div>
      </div>

      {/* ---------- DESKTOP ---------- */}
      <div className="hidden items-start gap-2 md:flex">
        <div className="flex flex-1 gap-[5.5625rem] pr-[2.5625rem]">
          {/* Newsletter column */}
          <div className="flex flex-1 flex-col gap-4">
            <h2
              className="text-fluid-cta font-bold uppercase leading-[1.3] text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Subscribe to SUITS U for exclusive updates.
            </h2>
            <div className="flex flex-col gap-4 pt-4">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full border border-white bg-white p-3 text-base uppercase text-black placeholder:uppercase placeholder:text-gray-400"
                style={{ fontFamily: "var(--font-roboto)" }}
              />
              <ButtonSecondary tone="white" className="w-full justify-center">
                Join Email List
              </ButtonSecondary>
            </div>
            <p className="text-xs leading-[1.5] text-white">
              By joining, you agree to our Terms and Conditions.
            </p>
          </div>

          {/* Stores column */}
          <div className="flex flex-1 flex-col gap-6 border-l border-white pl-8">
            <h2
              className="text-fluid-cta font-bold uppercase leading-[1.3] text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Visit Our Stores
            </h2>
            <div className="flex flex-col gap-4">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center border border-white bg-white px-6 py-3 text-base uppercase leading-[1.5] text-black"
                style={{ fontFamily: "var(--font-roboto)" }}
              >
                Maidstone
              </button>
              {STORES.map((store) => (
                <ButtonSecondary
                  key={store}
                  tone="white"
                  className="w-full justify-center"
                >
                  {store}
                </ButtonSecondary>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-[446/321] flex-1 overflow-hidden">
          <Image
            src={IMAGE_SRC}
            alt="Visit our stores"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
