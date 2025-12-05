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
  title: "Future You Generator 🔮",
  description:
    "Discover your hilarious future persona! Take a fun quiz and reveal what destiny has in store for you.",
  openGraph: {
    title: "Future You Generator 🔮",
    description:
      "Discover your hilarious future persona! Take a fun quiz and reveal what destiny has in store for you.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Future You Generator 🔮",
    description: "Discover your hilarious future persona!",
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
        {children}
      </body>
    </html>
  );
}
