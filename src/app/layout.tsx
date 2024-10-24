import "./globals.css";

import type { Metadata } from "next";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${appFont.className} bg-slate-50 antialiased`}>
        <ThemeContextProvider>
          {children}
          <ThemeSwitchButton />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
