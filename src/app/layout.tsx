import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  authors: [{ name: "Check Writing Assistant" }],
  creator: "Check Writing Assistant",
  publisher: "Check Writing Assistant",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://checkwritingassistant.com",
    title: "How to Write a Check - Interactive Guide & Simulator",
    description:
      "Master check writing with our comprehensive guide and interactive simulator. Practice safely and learn proper techniques.",
    siteName: "Check Writing Assistant",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Write a Check - Interactive Guide & Simulator",
    description:
      "Learn to write checks properly with our interactive simulator and comprehensive guide.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://checkwritingassistant.com" />
        <meta
          name="google-site-verification"
          content="your-verification-code"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Check Writing Assistant",
              description:
                "Interactive tool to learn how to write checks properly with step-by-step guidance and practice simulator.",
              url: "https://checkwritingassistant.com",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Interactive check writing simulator",
                "Step-by-step writing guide",
                "PDF export functionality",
                "Sample check templates",
                "Comprehensive FAQ",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
