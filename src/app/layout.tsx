import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SnowBackground from "@/components/SnowBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://winterlabs.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Winter Labs — Autonomous systems for silicon, capital & research",
    template: "%s · Winter Labs",
  },
  description:
    "Winter Labs is a research and product studio building AI agents for chip design and tapeout, an AI CFO, new machine learning frameworks, and open source software.",
  keywords: [
    "Winter Labs",
    "chip design",
    "AI tapeout",
    "AI agents",
    "AI CFO",
    "machine learning frameworks",
    "open source",
    "EDA",
  ],
  openGraph: {
    title: "Winter Labs",
    description:
      "Autonomous agents for chip design & tapeout, an AI CFO, new ML frameworks, and open source software.",
    url: siteUrl,
    siteName: "Winter Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winter Labs",
    description:
      "Autonomous systems for silicon, capital, and the frontiers in between.",
  },
};

export const viewport: Viewport = {
  themeColor: "#04060d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col">
        <div className="aurora-field" />
        <div className="grid-veil" />
        <SnowBackground />
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
