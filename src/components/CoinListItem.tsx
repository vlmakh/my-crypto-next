import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/utils/formatPrice';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/16/solid';

import type { ICoin } from '@/types';

export const CoinListItem = ({ coin }: { coin: ICoin }) => {
  return (
    <li className="mx-auto max-w-min border-b-2">
      <Link
        href={`/coins/${coin.id}`}
        className="group flex w-full items-center gap-4 px-2 py-1"
      >
        <div className="h-12 w-12">
          <Image
            src={coin.icon}
            alt={coin.id}
            width={48}
            height={48}
            className="transition-transform group-hover:scale-110"
          />
        </div>
        <div className="w-44 text-left">
          <p className="text-lg font-bold transition-colors group-hover:text-yellow-500">
            {coin.symbol}
          </p>

          <p className="transition-colors group-hover:text-yellow-500">
            {coin.name}
          </p>
        </div>

        <p className="w-28 text-right">{formatPrice(coin.price)}</p>

        <p
          className={`flex w-16 items-center justify-end text-right text-sm ${coin.priceChange1d >= 0 ? 'text-green-500' : 'text-red-500'}`}
        >
          {coin.priceChange1d >= 0 ? (
            <ChevronUpIcon className="h-4 w-4" />
          ) : (
            <ChevronDownIcon className="h-4 w-4" />
          )}
          {Math.abs(coin.priceChange1d).toFixed(1)}%{' '}
        </p>

        <p className="hidden w-10 text-right text-xs md:block">{coin.rank}</p>
      </Link>
    </li>
  );
};
