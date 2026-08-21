import type { Metadata } from "next";
import { Orbitron, Rajdhani, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gulf Coast Academy TSA",
    template: "%s | Gulf Coast Academy TSA",
  },
  description:
    "Gulf Coast Academy TSA (Technology Student Association) — preparing tomorrow's innovators through leadership, technology, engineering, and design at Gulf Coast Academy of Innovation & Technology @Brookside.",
  metadataBase: new URL("https://gcatsa.org"),
  openGraph: {
    title: "Gulf Coast Academy TSA",
    description:
      "Preparing tomorrow's innovators through leadership, technology, engineering, and design.",
    siteName: "Gulf Coast Academy TSA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} ${jetbrainsMono.variable} font-body`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
