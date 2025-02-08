import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Writing Excellence | Professional Writing Tutoring",
  description: "Expert writing tutoring to help you excel in academics and professional life. Personalized sessions with a certified Master Tutor.",
  metadataBase: new URL("https://tutor-website-inky.vercel.app"),
  openGraph: {
    title: "Writing Excellence | Professional Writing Tutoring",
    description: "Expert writing tutoring to help you excel in academics and professional life. Personalized sessions with a certified Master Tutor.",
    url: "https://tutor-website-inky.vercel.app",
    siteName: "Writing Excellence",
    images: [
      {
        url: "/celeste-hor.jpeg",
        width: 1200,
        height: 630,
        alt: "Writing Excellence - Professional Writing Tutoring",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing Excellence | Professional Writing Tutoring",
    description: "Expert writing tutoring to help you excel in academics and professional life. Personalized sessions with a certified Master Tutor.",
    images: ["/celeste-hor.jpeg"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        url: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
