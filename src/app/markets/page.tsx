import { fetchMarkets } from '@/utils/fetchCoinList';
import type { IMarketData } from '@/types';
import Image from 'next/image';

export default async function MarketDataPage() {
  const result: IMarketData = await fetchMarkets();

  return (
    <>
      <div className="relative mx-auto mt-4 max-w-[568px]">
        <Image
          src="/images/markets-568x322.webp"
          alt=""
          width={568}
          height={322}
          className="mx-auto"
        />

        <p className="absolute left-1/2 top-4 -translate-x-1/2 transform font-bold">
          Total Cryptomarket Cap
        </p>

        <h2 className="absolute bottom-4 left-1/2 -translate-x-1/2 transform text-3xl font-bold sm:text-5xl">
          {result.marketCap.toLocaleString()}$
        </h2>
      </div>

      <div className="relative mx-auto mt-4 max-w-[568px] before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-r before:from-transparent before:to-slate-900">
        <Image
          src="/images/bitcoin_dom.webp"
          alt=""
          width={568}
          height={320}
          className="mx-auto"
        />

        <p className="absolute right-4 top-4 z-10 font-bold">Bitcoin dominance</p>

        <h2 className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform text-4xl font-bold sm:text-6xl">
          {result.btcDominance.toFixed(1)}%
        </h2>
      </div>
    </>
  );
}
