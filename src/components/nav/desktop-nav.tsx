import Link from "next/link";
import {
  BookmarkIcon,
  CartIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "@/components/icons";
import { Wordmark } from "./wordmark";

// 44px touch target around a 24px icon, drawn with an ::after overlay so the
// visual footprint and the nav's gap-4 rhythm are untouched.
const iconAction =
  "relative block hover:opacity-80 active:opacity-70 after:absolute after:-inset-2.5 after:content-['']";

/**
 * Desktop navigation (≥ 768px).
 * Figma: node 4508:18455 — height 4.5rem (72px), px 3rem, black bg, white text/icons.
 */
export function DesktopNav() {
  return (
    <nav
      aria-label="Primary"
      className="hidden md:flex w-full items-center bg-black py-4"
      style={{ fontFamily: "var(--font-roboto)" }}
    >
      <div className="flex h-18 w-full items-center justify-between pl-[max(3rem,env(safe-area-inset-left))] pr-[max(3rem,env(safe-area-inset-right))]">
        {/* Left: nav links */}
        <ul className="flex flex-1 items-center gap-8 text-lg text-white">
          <li>
            <button
              type="button"
              className="relative flex items-center gap-1 hover:opacity-80 active:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white after:absolute after:-inset-x-2 after:-inset-y-2.5 after:content-['']"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              Shop
              <ChevronDownIcon className="size-6" />
            </button>
          </li>
          <li>
            <Link
              href="/tailoring"
              className="relative inline-block hover:opacity-80 active:opacity-70 after:absolute after:-inset-x-1 after:-inset-y-2.5 after:content-['']"
            >
              Tailoring
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="relative inline-block hover:opacity-80 active:opacity-70 after:absolute after:-inset-x-1 after:-inset-y-2.5 after:content-['']"
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Center: wordmark */}
        <div className="flex flex-1 justify-center">
          <Link href="/" aria-label="Suits U — home">
            <Wordmark className="text-fluid-nav leading-[0.8]" />
          </Link>
        </div>

        {/* Right: actions */}
        {/* Icon actions: the ::after overlay expands each hit area to 44px
            (the 24px icon + 10px on every side) without changing the visual. */}
        <ul className="flex flex-1 items-center justify-end gap-4 text-white">
          <li>
            <Link href="/account" aria-label="Account" className={iconAction}>
              <UserIcon className="size-6" />
            </Link>
          </li>
          <li>
            <Link href="/saved" aria-label="Saved" className={iconAction}>
              <BookmarkIcon className="size-6" />
            </Link>
          </li>
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
        </ul>
      </div>
    </nav>
  );
}
