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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
