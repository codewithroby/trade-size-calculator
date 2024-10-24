import "./globals.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

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
      <body className={`${appFont.className} antialiased`}>{children}</body>
    </html>
  );
}
