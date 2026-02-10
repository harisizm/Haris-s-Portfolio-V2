import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { ScrollToTop } from "@/components/ScrollToTop";

const inter = Inter({ subsets: ['latin'], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Haris Iftikhar",
  description: "portfolio -2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${calistoga.variable}`}>
      <body className="bg-gray-900 text-white antialiased font-sans">
        {children}
        <div className="fixed top-0 right-0 p-4 text-[10px] text-white/10 pointer-events-none z-[100] font-mono select-none">v3.0</div>
        <ScrollToTop />
      </body>
    </html>
  );
}
