import Link from "next/link";
import { CartIcon, MenuIcon, SearchIcon } from "@/components/icons";
import { Wordmark } from "./wordmark";

// 44px touch target around a 24px icon via an ::after overlay — touch-first,
// so taps land reliably without widening the visual row.
const iconAction =
  "relative block active:opacity-70 after:absolute after:-inset-2.5 after:content-['']";

/**
 * Mobile navigation (< 768px).
 * Figma: node 4508:18284 — px 1.25rem, py 0.75rem, black bg, wordmark 2.5rem.
 */
export function MobileNav() {
  return (
    <nav
      aria-label="Primary"
      className="flex w-full items-center justify-between bg-black py-3 pl-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] md:hidden"
    >
      <Link
        href="/"
        aria-label="Suits U — home"
        className="relative active:opacity-70"
      >
        <Wordmark className="text-[2.5rem] leading-[1.2]" />
      </Link>

      <ul className="flex items-center gap-4 text-white">
        <li>
          <button type="button" aria-label="Search" className={iconAction}>
            <SearchIcon className="size-6" />
          </button>
        </li>
        <li>
          <Link href="/cart" aria-label="Cart" className={iconAction}>
            <CartIcon className="size-6" />
          </Link>
        </li>
        <li>
          <button type="button" aria-label="Open menu" className={iconAction}>
            <MenuIcon className="size-6" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
