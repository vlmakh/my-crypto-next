import Link from 'next/link';
import Image from 'next/image';
import { fetchExchanges } from '@/utils/fetchCoinList';
import type { IExchangeItem } from '@/types';

export default async function ExchangesPage() {
  const exchangesList: IExchangeItem[] = await fetchExchanges();

  return (
    <ul className="flex flex-wrap justify-center gap-4 p-4">
      {exchangesList
        .sort((a: { rank: number }, b: { rank: number }) => a.rank - b.rank)
        .map(item => {
          if (item.url && item.icon && item.volume24h)
            return (
              <li key={item.id} className="py-1 text-center w-28">
                <Link
                  href={item.url}
                  target="_blank"
                  className="group transition-colors hover:text-yellow-500 text-sm"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="transition-transform group-hover:scale-110 mx-auto"
                  />
                  {item.name}
                </Link>
              </li>
            );
        })}
    </ul>
  );
}
