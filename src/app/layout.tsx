import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ 
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"]
});

const montserrat = Montserrat({ 
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "Армен Степаньянц - Персональный тренер по фитнесу",
  description: "Профессиональные тренировки и персональный подход к достижению ваших фитнес-целей с опытным тренером Арменом Степаньянцем",
  keywords: "фитнес тренер, персональные тренировки, спорт, здоровье, Армен Степаньянц",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="bg-eerie_black">
      <body className={`${openSans.className} ${montserrat.variable} bg-eerie_black`}>{children}</body>
    </html>
  );
}