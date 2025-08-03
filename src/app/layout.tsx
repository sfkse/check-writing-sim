import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "How to Write a Check - Interactive Guide & Simulator | Check Writing Tutorial",
  description:
    "Learn how to write a check properly with our step-by-step guide and interactive simulator. Practice filling out checks, export PDFs, and master this essential financial skill.",
  keywords:
    "how to write a check, check writing guide, check simulator, fill out check, check tutorial, banking skills, financial literacy",
  authors: [{ name: "Financial Education Team" }],
  creator: "Check Writing Simulator",
  publisher: "Check Writing Simulator",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://checkwritingassistant.com",
    siteName: "Check Writing Simulator",
    title: "How to Write a Check - Interactive Guide & Simulator",
    description:
      "Learn how to write a check properly with our step-by-step guide and interactive simulator. Practice filling out checks, export PDFs, and master this essential financial skill.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Check Writing Simulator - Learn to Write Checks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Write a Check - Interactive Guide & Simulator",
    description:
      "Learn how to write a check properly with our step-by-step guide and interactive simulator.",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3B82F6",
  other: {
    "application-ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Check Writing Simulator",
      description:
        "Interactive check writing simulator and comprehensive guide for learning proper check writing techniques.",
      url: "https://checkwritingassistant.com",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
