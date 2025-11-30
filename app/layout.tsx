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
  description: "Technology should have a heartbeat. We build emotional AI companions that understand, resonate, and physically connect with you. Forming the Formless.",
  keywords: ["Holographic AI", "HAI", "Emotional AI", "Tata AI", "Holo-Cabin", "CES 2025", "HKUST"],
  icons: {
    icon: '/pics/logo_aporion.jpg',
    shortcut: '/pics/logo_aporion.jpg',
    apple: '/pics/logo_aporion.jpg',
  },
  openGraph: {
    title: "APORION - Forming the Formless",
    description: "Technology should have a heartbeat. We build emotional AI companions that understand, resonate, and physically connect with you.",
    type: "website",
    images: ['/pics/logo_aporion.jpg'],
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
