import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display Font - Futuristic, wide sans-serif for headings
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Body Font - Clean, neutral sans-serif
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Code/Concept Font - Monospace for Future Lab section
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "APORION - Forming the Formless | CES 2025 Innovation Award Honoree",
  description: "The World's First Holographic & Tangible HAI Ecosystem. We build Souls you can see, and Warmth you can hold.",
  keywords: ["Holographic AI", "HAI", "Emotional AI", "Tata AI", "Holo-Cabin", "CES 2025", "HKUST"],
  openGraph: {
    title: "APORION - Forming the Formless",
    description: "The World's First Holographic & Tangible HAI Ecosystem.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
