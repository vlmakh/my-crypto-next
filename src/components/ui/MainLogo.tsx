'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCurrencyStore } from '@/configs/store';

export const MainLogo = () => {
  const currencyName = useCurrencyStore(state => state.currency.name);

  return (
    <Link
      href={`/?page=1&currency=${currencyName}`}
      className="group mr-4 flex items-center gap-2 py-2"
    >
      <Image
        src="/logo512.webp"
        alt="Logo"
        width={40}
        height={40}
        className="transition-transform group-hover:scale-110"
        priority
      />{' '}
      <span className="hidden lg:block">MyCrypto</span>
    </Link>
  );
};
