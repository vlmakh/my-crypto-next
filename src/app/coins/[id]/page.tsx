import { Metadata } from "next";
import Image from "next/image";
import { fetchCoinItem } from "@/utils/fetchCoinList";
import { formatPrice } from "@/utils/formatPrice";
import { CoinChart } from "@/components/CoinChart";
import { ICoin } from "@/types";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await fetchCoinItem(id);

  return {
    title: post.name,
  };
}

export default async function CoinPage({ params: { id } }: Props) {
  const coin: ICoin = await fetchCoinItem(id);

  return (
    <div className="text-center pt-5 sm:px-4 lg:w-1/2 mx-auto lg:px-0">
      <div className="flex gap-4 justify-center">
        <Image src={coin.icon} alt={coin.id} width={60} height={60} priority/>
        <div>
          <p className="font-bold text-3xl">{coin.symbol}</p>
          <p>{coin.name}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="font-bold text-2xl">{formatPrice(coin.price)}$</p>

        <div>
          <p>{coin.priceChange1h.toFixed(1)}% 1H</p>
          <p>{coin.priceChange1d.toFixed(1)}% 1D</p>
          <p>{coin.priceChange1w.toFixed(1)}% 1W</p>
        </div>
      </div>

      <CoinChart id={coin.id} />

      <div className="pt-5">
        <p className="border-b-2 flex justify-between py-2">
          <span className="font-bold">Rank: </span>
          <span>{coin.rank}</span>
        </p>

        <p className="border-b-2 flex justify-between py-2">
          <span className="font-bold">Market cap: </span>
          <span>{Math.round(coin.marketCap).toLocaleString()} $</span>
        </p>
        <p className="border-b-2 flex justify-between py-2">
          <span className="font-bold">Volume 24h: </span>
          <span>{Math.round(coin.volume).toLocaleString()} $</span>
        </p>
        <p className="flex justify-between">
          <span className="font-bold">Supply: </span>
          <span>{coin.totalSupply.toLocaleString()}</span>
        </p>
        <p className="border-b-2 flex justify-between py-2">
          <span>Circulating: </span>
          <span>{coin.availableSupply.toLocaleString()}</span>
        </p>
        <p className="border-b-2 flex justify-between py-2">
          <span className="font-bold">homepage: </span>
          <span>{coin.websiteUrl}</span>
        </p>
      </div>
    </div>
  );
}
