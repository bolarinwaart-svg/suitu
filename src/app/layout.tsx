import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Roboto_Flex, Anton } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Figma uses Roboto with a width axis (`wdth 100`) — that's Roboto Flex,
// the variable-axis sibling of Roboto. Same default appearance, but the
// `wdth` and `wght` axes are tunable via fontVariationSettings.
const robotoFlex = Roboto_Flex({
  variable: "--font-roboto",
  subsets: ["latin"],
  axes: ["wdth"],
});

// Anton stands in for Arges Bold until the licensed Arges files are added.
// Anton is a condensed heavy display sans — closest free Google Font match
// for Arges Bold's tall, high-contrast wordmark feel. See guidelines.md §3.
const anton = Anton({
  variable: "--font-display-fallback",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Suit U",
  description: "Suit U",
};

// viewportFit: "cover" lets content extend under iOS notches/home indicators;
// components opt back in with env(safe-area-inset-*) where edges matter (nav).
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${robotoFlex.variable} ${anton.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
