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
  openGraph: {
    title: "MyMedCare - Your Health, Simplified",
    description:
      "Book appointments, manage health records, and connect with healthcare professionals - all in one powerful platform designed for modern healthcare.",
    type: "website",
    locale: "en_US",
    siteName: "MyMedCare",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyMedCare - Your Health, Simplified",
    description:
      "Book appointments, manage health records, and connect with healthcare professionals - all in one powerful platform designed for modern healthcare.",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
