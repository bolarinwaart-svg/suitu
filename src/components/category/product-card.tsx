import Image from "next/image";

type ProductCardProps = {
  src: string;
  alt: string;
  preorder?: boolean;
};

/**
 * Single product image tile.
 * Heights:
 *   - Mobile: 18.75rem (300px)
 *   - Desktop: 29.375rem (470px)
 *
 * Optional "PREORDER" badge sits inside the cream area at top-left.
 * The cream background shows because product photography is shot on a
 * matching #F8F6EA studio backdrop in the source images.
 */
export function ProductCard({ src, alt, preorder = false }: ProductCardProps) {
  return (
    <article className="relative aspect-[330/470] flex-1 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 120rem) 29rem, (min-width: 768px) calc((min(100vw, 120rem) - clamp(14rem, 22vw, 21.3125rem) - 4rem) / 3), 50vw"
        className="object-cover"
        quality={100}
      />
      {preorder && (
        <span
          className="absolute left-2 top-2 md:left-4 md:top-4 text-xs md:text-lg text-black"
          style={{ fontFamily: "var(--font-roboto)", lineHeight: 1.5 }}
        >
          PREORDER
        </span>
      )}
    </article>
  );
}
