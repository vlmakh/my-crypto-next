// import { Metadata } from "next";
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

// async function generateMetadata({
//   params: { id },
// }: Props): Promise<Metadata> {
//   const product = await getData(id);

//   return { title: product.title };
// }

export default async function CoinPage({ params: { id } }: Props) {
  const coin: ICoin = await fetchCoinItem(id);

  return (
    <div className="text-center pt-5 sm:px-4 lg:w-1/2 mx-auto lg:px-0">
      <div className="flex gap-4 justify-center">
        <Image
        src={coin.icon}
        alt={coin.id}
        width={60}
        height={60}
      />
      <div><p className="font-bold text-3xl">{coin.symbol}</p>
      <p>{coin.name}</p></div>
      </div>


      <div className="flex justify-between items-center">
        <p className="font-bold text-2xl">{formatPrice(coin.price)}$</p>

        <div>
          <p>{coin.priceChange1h.toFixed(1)}% 1H</p>
          <p>{coin.priceChange1d.toFixed(1)}% 1D</p>
          <p>{coin.priceChange1w.toFixed(1)}% 1W</p>
        </div>
      </div>
      {/* <CoinChart id={coin.id} /> */}

      <div>
        <p>Rank: {coin.rank}</p>

        <p>Market cap: {coin.marketCap.toFixed(0)} $</p>
        <p>Volume 24h: {coin.volume.toFixed(0)} $</p>
        <p>Supply: {coin.totalSupply}</p>
        <p>Circulating: {coin.availableSupply}</p>
        <p>homepage: {coin.websiteUrl}</p>
      </div>
    </div>
  );
}
