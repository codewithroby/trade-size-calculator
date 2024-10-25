import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import ThemeContextProvider from "@/context/theme-context";
import { ThemeSwitchButton } from "@/components/theme-switch-button";

const appFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trade Size Calculator",
  description:
    "Calculate your trade size seamlessly with this free calculator.",
};

export const viewport: Viewport = {
  userScalable: false,
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${appFont.className} bg-slate-50 font-mono antialiased`}
      >
        <ThemeContextProvider>
          {children}
          <ThemeSwitchButton />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
