import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Press_Start_2P } from "next/font/google";
import { InstallPrompt } from "@/components/install-prompt";
import { PwaRegister } from "@/components/pwa-register";
import { SuccessProvider } from "@/components/success-overlay";
import "./globals.css";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
});

const pixel = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Agentic — Farm food to cities and factories",
  description:
    "Harvest logging, cold-chain telematics, and urban drop-offs for Tatu City, Konza City, factories, and Kenyan corridors.",
  applicationName: "Agentic",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Agentic",
    statusBarStyle: "default",
  },
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#c8f542",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plex.variable} ${pixel.variable} antialiased`}>
        <SuccessProvider>
          {children}
          <PwaRegister />
          <InstallPrompt />
        </SuccessProvider>
      </body>
    </html>
  );
}
