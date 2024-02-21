import { fetchMarkets } from '@/utils/fetchCoinList';
import type { IMarketData } from '@/types';
import Image from 'next/image';

export default async function MarketDataPage() {
  const result: IMarketData = await fetchMarkets();

  return (
    <div className="py-4 text-center">
      <h2>
        Total Cryptomarket Cap: {result.marketCap.toLocaleString()}${' '}
        {result.marketCapChange.toFixed(1)}%
      </h2>
      <Image
        src="/images/markets-568x322.webp"
        alt=""
        width={568}
        height={322}
        className="mx-auto"
      />

      <h3>
        Bitcoin dominance: {result.btcDominance.toFixed(1)}%{' '}
        {result.btcDominanceChange.toFixed(1)}%
      </h3>
    </div>
  );
}
