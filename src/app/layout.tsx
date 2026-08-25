import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Skyward Media Limited — Elegance In The Sky",
    template: "%s | Skyward Media Limited",
  },
  description:
    "Skyward Media Limited is Kenya's leading outdoor advertising agency. Billboards, sky signs, wall wraps, and billboard fabrication across Nairobi, Nakuru, Thika, and Thika Road.",
  keywords: [
    "billboard advertising Kenya",
    "outdoor advertising Nairobi",
    "sky signs Kenya",
    "wall wraps Nairobi",
    "billboard fabrication Kenya",
    "outdoor media Kenya",
  ],
  icons: {
    icon: "/images/brand/SkywardLogo-300x300.png",
  },
  openGraph: {
    title: "Skyward Media Limited — Elegance In The Sky",
    description:
      "Outdoor media experts delivering visibility with a difference across Kenya.",
    url: "https://www.skywardmedia.co.ke",
    siteName: "Skyward Media Limited",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyward Media Limited — Elegance In The Sky",
    description:
      "Outdoor media experts delivering visibility with a difference across Kenya.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
