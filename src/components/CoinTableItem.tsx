import type { ICoin } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/16/solid';
import { formatPrice } from '@/utils/formatPrice';
import { formatCurrency } from '@/utils/formatCurrency';

type Props = {
  coin: ICoin;
  currencyName: string;
};

export const CoinTableItem = ({ coin, currencyName }: Props) => {
  return (
    <tr
      className="group border-b-2 transition-colors hover:bg-slate-800"
    >
      <td className="px-2 text-right text-xs">{coin.rank}</td>

      <td>
        <Link
          className="flex items-center gap-2 p-2"
          href={`/coins/${coin.id}?currency=${currencyName}`}
        >
          <Image
            src={coin.icon}
            alt={coin.id}
            width={32}
            height={32}
            className="transition-transform group-hover:scale-110"
          />
          <span className="font-bold">{coin.symbol}</span>
          <span className="hidden sm:block">{coin.name}</span>
        </Link>
      </td>

      <td className="px-2 text-right">
        {formatCurrency(currencyName)} {formatPrice(coin.price)}
      </td>

      <td className="hidden md:table-cell">
        <p
          className={`flex items-center justify-end px-2 text-right text-sm ${coin.priceChange1h >= 0 ? 'text-green-500' : 'text-red-500'}`}
        >
          {coin.priceChange1h >= 0 ? (
            <ChevronUpIcon className="h-4 w-4" />
          ) : (
            <ChevronDownIcon className="h-4 w-4" />
          )}
          {Math.abs(coin.priceChange1h).toFixed(1)}%
        </p>
      </td>

      <td>
        <p
          className={`flex items-center justify-end px-2 text-right text-sm ${coin.priceChange1d >= 0 ? 'text-green-500' : 'text-red-500'}`}
        >
          {coin.priceChange1d >= 0 ? (
            <ChevronUpIcon className="h-4 w-4" />
          ) : (
            <ChevronDownIcon className="h-4 w-4" />
          )}
          {Math.abs(coin.priceChange1d).toFixed(1)}%
        </p>
      </td>

      <td className="hidden md:table-cell">
        <p
          className={`flex items-center justify-end px-2 text-right text-sm ${coin.priceChange1w >= 0 ? 'text-green-500' : 'text-red-500'}`}
        >
          {coin.priceChange1w >= 0 ? (
            <ChevronUpIcon className="h-4 w-4" />
          ) : (
            <ChevronDownIcon className="h-4 w-4" />
          )}
          {Math.abs(coin.priceChange1w).toFixed(1)}%
        </p>
      </td>

      <td className="hidden px-2 text-right text-xs md:table-cell">
        {Math.round(coin.marketCap).toLocaleString()}
      </td>
    </tr>
  );
};
