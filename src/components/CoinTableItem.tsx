import type { ICoin } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/16/solid';
import { formatPrice } from '@/utils/formatPrice';

type Props = {
  coin: ICoin;
  currencyName: string;
};

export const CoinTableItem = ({ coin, currencyName }: Props) => {
  return (
    <tr
      className="group border-b-2 transition-colors hover:bg-slate-800"
      data-href={`/coins/${coin.id}?currency=${currencyName}`}
    >
      <td className="p-2">
        <Image
          src={coin.icon}
          alt={coin.id}
          width={32}
          height={32}
          className="transition-transform group-hover:scale-110"
        />
      </td>
      <td className="px-2 text-left text-lg font-bold">{coin.symbol}</td>
      <td className=" text-left">
        <Link
          className="block px-2"
          href={`/coins/${coin.id}?currency=${currencyName}`}
        >
          {coin.name}
        </Link>
      </td>
      <td className="px-2 text-right">{formatPrice(coin.price)}</td>
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
      <td className="px-2 text-right text-xs">{coin.rank}</td>
    </tr>
  );
};
