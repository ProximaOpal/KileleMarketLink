import type { Metadata } from "next";
import { IBM_Plex_Sans, Press_Start_2P } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-display",
});

const pixel = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Agentic — Build & orchestrate AI agents while you sleep",
  description:
    "Visualize, orchestrate, and manage AI agents with real-time tools. Frosted color system, agentic layout, and the Terra Thames map as its own scroll page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plex.variable} ${pixel.variable} antialiased`}>{children}</body>
    </html>
  );
}
