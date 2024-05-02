import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { TheHeader } from "@/components/TheHeader";
import { TheFooter } from "@/components/TheFooter";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "My Crypto",
  description: "Cryptocurrencies tracking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${oswald.variable} flex flex-col h-screen`}>
        <TheHeader />

        <main className="mb-auto">{children}</main>

        <TheFooter />

        <Toaster />
      </body>
    </html>
  );
}
