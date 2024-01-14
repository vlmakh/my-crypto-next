import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TheHeader } from "@/components/TheHeader";
import { TheFooter } from "@/components/TheFooter";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} flex flex-col h-screen`}>
        <TheHeader />

        <main className="mb-auto">{children}</main>

        <TheFooter />
      </body>
    </html>
  );
}
