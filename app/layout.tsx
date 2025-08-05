import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyMedCare - Your Health, Simplified",
  description:
    "Book appointments, manage health records, and connect with healthcare professionals - all in one powerful platform designed for modern healthcare.",
  keywords:
    "healthcare, medical app, doctor appointments, health records, MyMedCare",
  authors: [{ name: "MyMedCare Team" }],
  metadataBase: new URL("https://mymedcare.com"),
  icons: {
    icon: [
      { url: "/logo-transparent.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-transparent.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/logo-transparent.png",
  },
  openGraph: {
    title: "MyMedCare - Your Health, Simplified",
    description:
      "Book appointments, manage health records, and connect with healthcare professionals - all in one powerful platform designed for modern healthcare.",
    type: "website",
    locale: "en_US",
    siteName: "MyMedCare",
    images: [
      {
        url: "/logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "MyMedCare Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyMedCare - Your Health, Simplified",
    description:
      "Book appointments, manage health records, and connect with healthcare professionals - all in one powerful platform designed for modern healthcare.",
    images: ["/logo-transparent.png"],
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo-transparent.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-transparent.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
