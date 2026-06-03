import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

/**
 * Renders both navs; visibility is controlled by Tailwind responsive utilities
 * (`md:hidden` / `hidden md:flex`). Server-rendered, no client JS.
 */
export function Nav() {
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
}

export { DesktopNav, MobileNav };
