import Image from 'next/image';
import Link from 'next/link';
import type { ICoinFound } from '@/types';

type Props = {
  coin: ICoinFound;
};

export const SearchResultListItem = ({ coin }: Props) => {
  const isImageURL = (urlString: string) => {
    if (urlString.split(':')[0] !== 'https') return false;
    else return true;
  };

  return (
    <li className="w-40 rounded-md border-2" key={coin.id}>
      <Link href={`/coins/${coin.id}?currency=USD`} className="group px-2 py-1">
        <div className="mx-auto min-h-24  w-24">
          {isImageURL(coin.large) && (
            <Image
              src={coin.large}
              alt={coin.id}
              width={100}
              height={100}
              className="transition-transform group-hover:scale-105"
            />
          )}
        </div>
        <div className="pt-2 text-center">
          <p className="text-xl font-bold transition-colors group-hover:text-yellow-500">
            {coin.symbol}
          </p>

          <p className="transition-colors group-hover:text-yellow-500">
            {coin.name}
          </p>
        </div>
      </Link>
    </li>
  );
};
