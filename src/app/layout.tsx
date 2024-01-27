import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TheHeader } from "@/components/TheHeader";
import { TheFooter } from "@/components/TheFooter";
// import { Providers } from "@/components/Providers";

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
        {/* <Providers> */}
          <TheHeader />

          <main className="mb-auto">{children}</main>

          <TheFooter />
        {/* </Providers> */}
      </body>
    </html>
  );
}
