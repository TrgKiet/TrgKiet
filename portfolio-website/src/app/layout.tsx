import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Alex Chen - Creative Professional & Designer",
  description: "Portfolio of Alex Chen, a creative professional and designer specializing in digital experiences, web design, and user interface design.",
  keywords: ["portfolio", "designer", "developer", "creative", "web design", "UI/UX"],
  authors: [{ name: "Alex Chen" }],
  creator: "Alex Chen",
  openGraph: {
    title: "Alex Chen - Creative Professional & Designer",
    description: "Portfolio showcasing creative work and digital experiences",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Chen - Creative Professional & Designer",
    description: "Portfolio showcasing creative work and digital experiences",
    creator: "@alexchen",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
