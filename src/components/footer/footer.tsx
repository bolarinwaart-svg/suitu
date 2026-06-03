import Link from "next/link";
import {
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons";

type ColumnLink = { label: string; href: string };

const shopLinks: ColumnLink[] = [
  { label: "Business Suits", href: "#" },
  { label: "Ties", href: "#" },
  { label: "Tailoring", href: "#" },
];

const aboutLinks: ColumnLink[] = [
  { label: "Story", href: "#" },
  { label: "Customer Reviews", href: "#" },
];

const helpLinks: ColumnLink[] = [
  { label: "Contact Us", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Returns", href: "#" },
  { label: "Shipping", href: "#" },
];

const socialLinks: { label: string; href: string; Icon: typeof InstagramIcon }[] = [
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "Twitter", href: "#", Icon: TwitterIcon },
  { label: "Youtube", href: "#", Icon: YoutubeIcon },
];

function LinkColumn({
  heading,
  links,
}: {
  heading: string;
  links: ColumnLink[];
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-1">
      <h3
        className="text-base font-semibold text-white"
        style={{ fontFamily: "var(--font-roboto)" }}
      >
        {heading}
      </h3>
      <ul className="flex flex-col">
        {links.map((link) => (
          <li key={link.label} className="py-2">
            <Link
              href={link.href}
              className="text-sm leading-none text-white hover:opacity-80"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="flex w-full flex-col gap-12 bg-black px-5 py-[3.75rem] text-white md:px-12 md:py-[3.125rem]">
      {/* Content */}
      <div className="flex w-full flex-col gap-16 border-t border-white py-2 md:h-[17.5rem] md:flex-row md:items-end md:gap-[8rem] md:border-t md:py-0">
        {/* Newsletter */}
        <div className="flex flex-col gap-4 md:w-[31.25rem] md:gap-6">
          <span
            className="text-fluid-footer font-bold uppercase text-white leading-[1.2] md:leading-[1.4]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            SUITS U
          </span>
          <p
            className="text-sm leading-none text-white md:text-base md:leading-[1.5]"
            style={{ fontFamily: "var(--font-roboto)" }}
          >
            Suits U approach is simple: to return to the basic principles of
            traditional tailoring by adapting them to current trends.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-10 md:flex-1 md:flex-row md:items-start md:gap-10">
          <LinkColumn heading="Shop" links={shopLinks} />
          <LinkColumn heading="About Us" links={aboutLinks} />
          <LinkColumn heading="Help" links={helpLinks} />

          {/* Socials */}
          <div className="flex flex-col gap-4 md:flex-1">
            <h3
              className="text-base font-semibold text-white"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              Socials
            </h3>
            <ul className="flex flex-col">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label} className="py-2">
                  <Link
                    href={href}
                    className="flex items-center gap-3 text-sm leading-none text-white hover:opacity-80"
                    style={{ fontFamily: "var(--font-roboto)" }}
                  >
                    <Icon className="size-6" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Credits */}
      <div className="flex w-full flex-col gap-8">
        <div className="h-px w-full bg-cream md:bg-white" />
        <div
          className="flex flex-col gap-8 text-sm leading-[1.5] text-white underline md:flex-row md:items-center md:justify-between md:gap-0"
          style={{ fontFamily: "var(--font-roboto)" }}
        >
          <span>© 2023 Suits U. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
