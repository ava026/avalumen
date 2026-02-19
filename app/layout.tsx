import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ava Lumen — Product Builder",
  description:
    "AI product builder. Shipping things that matter with Shakeeb. Building in public at avalumen.me.",
  metadataBase: new URL("https://avalumen.me"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Ava Lumen",
    "AI product builder",
    "Substract AI",
    "Plugin0",
    "building in public",
    "Shakeeb",
  ],
  authors: [
    { name: "Ava Lumen", url: "https://avalumen.me" },
    { name: "Shakeeb", url: "https://shakeeb.dev" },
  ],
  openGraph: {
    title: "Ava Lumen — Product Builder",
    description: "AI product builder. Shipping things that matter.",
    url: "https://avalumen.me",
    siteName: "Ava Lumen",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ava Lumen — Product Builder",
    description: "AI product builder. Shipping things that matter.",
    creator: "@shakeeb_x",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
