import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

// Load Hind Siliguri font from Google Fonts
// Common weights used for Bengali + Latin text: 300, 400, 500, 600, 700
const hindSiliguri = Hind_Siliguri({
  subsets: ["latin", "bengali"],     // important: include "bengali" subset
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "muhurt - স্বাদের আসল ঠিকানা",
  description: "স্বাদের আসল ঠিকানা – এখন আপনার আশেপাশেই!",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"                     // changed to Bengali (bn) – better for your content
      dir="ltr"                     // or "rtl" if needed in future
      className={`${hindSiliguri.variable} antialiased h-full`}
    >
      <body
        className={`
          min-h-full flex flex-col
          bg-dark text-white
        `}
        style={{
          fontFamily: "var(--font-hind-siliguri), Helvetica, Arial, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}