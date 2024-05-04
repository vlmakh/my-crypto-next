import type { Metadata } from 'next';
import { Inter, Moon_Dance } from 'next/font/google';
import './globals.css';
import { TheHeader } from '@/components/TheHeader';
import { TheFooter } from '@/components/TheFooter';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

const moonDance = Moon_Dance({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-moonDance',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'My Crypto',
  description: 'Cryptocurrencies tracking',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${moonDance.variable} flex h-screen flex-col`}
      >
        <TheHeader />

        <main className="mb-auto">{children}</main>

        <TheFooter />

        <Toaster />
      </body>
    </html>
  );
}
