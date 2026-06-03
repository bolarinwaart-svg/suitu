import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero/hero";
import { CategorySection } from "@/components/category/category-section";
import { NewSuitsSection } from "@/components/category/new-suits-section";
import { BestSellers } from "@/components/best-sellers/best-sellers";
import { Craftsmanship } from "@/components/craftsmanship/craftsmanship";
import { ShowcasePair } from "@/components/showcase-pair/showcase-pair";
import { Cta } from "@/components/cta/cta";
import { Footer } from "@/components/footer/footer";

const businessProducts = [
  { src: "/products/business-card-1.png", alt: "Black tailored business suit", preorder: true },
  { src: "/products/business-card-2.png", alt: "Charcoal three-piece business suit", preorder: false },
  { src: "/products/business-card-3.png", alt: "Grey pinstripe three-piece business suit", preorder: false },
];

export default function Home() {
  return (
    // Gallery frame: the composition is tuned for ~1440px. Past 1920px it
    // centers on the black body so the wall mattes the work instead of
    // stretching the type thin. Imagery stays full-bleed within the frame.
    <div className="mx-auto flex w-full max-w-[120rem] flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col gap-2 bg-black">
        <Hero />
        <CategorySection title="Business" products={businessProducts} />
        <BestSellers />
        <Craftsmanship />
        <NewSuitsSection />
        <ShowcasePair />
        <Cta />
        <Footer />
      </main>
    </div>
  );
}
