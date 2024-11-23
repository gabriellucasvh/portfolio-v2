import type { Metadata } from "next";
import localFont from "next/font/local";
import { Caveat, Lora, Mate_SC } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-caveat",
});

const lora = Lora({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lora",
});

const mateSC = Mate_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mate-sc",
});

export const metadata: Metadata = {
  title: "Gabriel Gonçalves",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${lora.variable} ${mateSC.variable} antialiased bg-zinc-950 flex flex-col items-center justify-center text-white p-4`}
      >
        {children}
      </body>
    </html>
  );
}
