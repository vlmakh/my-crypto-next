import { Metadata } from 'next';
import Image from 'next/image';
import { fetchCoinItem } from '@/utils/fetchCoinList';
import { formatPrice } from '@/utils/formatPrice';
import { CoinChart } from '@/components/CoinChart';
import { ICoin } from '@/types';
import { BackLink } from '@/components/ui/BackLink';
import { AddRemoveButton } from '@/components/ui/AddRemoveButton';
import { redirect } from 'next/navigation';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const coin = await fetchCoinItem(id);

  if (!coin) {
    return notFound();
  }

  return {
    title: coin.name + ' | My Crypto',
  };
}

export default async function CoinPage({ params: { id } }: Props) {
  const coin: ICoin = await fetchCoinItem(id);

  return (
    <div className="mx-auto pt-5 text-center sm:px-4 lg:w-1/2 lg:px-0">
      <div className="flex justify-between">
        <BackLink />

        <div className="flex gap-4">
          <Image
            src={coin.icon}
            alt={coin.id}
            width={60}
            height={60}
            priority
          />
          <div>
            <h2 className="text-left text-3xl font-bold">{coin.symbol}</h2>
            <p>{coin.name}</p>
          </div>
        </div>

        <div>
          <AddRemoveButton coinId={coin.id} />
        </div>
      </div>

      <div className="flex items-center justify-between py-5">
        <p className="text-2xl font-bold">{formatPrice(coin.price)}$</p>

        <div className="text-right">
          <p>{coin.priceChange1h.toFixed(1)}% 1H</p>
          <p>{coin.priceChange1d.toFixed(1)}% 1D</p>
          <p>{coin.priceChange1w.toFixed(1)}% 1W</p>
        </div>
      </div>

      <CoinChart id={coin.id} />

      <div className="pt-5">
        <p className="flex justify-between border-b-2 py-2">
          <span className="font-bold">Rank</span>
          <span>{coin.rank}</span>
        </p>

        <p className="flex justify-between border-b-2 py-2">
          <span className="font-bold">Market cap</span>
          <span>{Math.round(coin.marketCap).toLocaleString()} $</span>
        </p>
        <p className="flex justify-between border-b-2 py-2">
          <span className="font-bold">Volume 24h</span>
          <span>{Math.round(coin.volume).toLocaleString()} $</span>
        </p>
        <p className="flex justify-between py-2">
          <span className="font-bold">Supply</span>
          <span>{coin.totalSupply.toLocaleString()}</span>
        </p>
        <p className="flex justify-between border-b-2 pb-2">
          <span>Circulating</span>
          <span>{coin.availableSupply.toLocaleString()}</span>
        </p>
        <p className="flex justify-between border-b-2 py-2">
          <span className="font-bold">homepage</span>
          <a
            href={coin.websiteUrl}
            target="_blank"
            className="transition-colors hover:text-yellow-500"
          >
            {coin.websiteUrl}
          </a>
        </p>
      </div>
    </div>
  );
}
