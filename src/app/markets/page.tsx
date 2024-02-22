import { fetchMarkets } from '@/utils/fetchCoinList';
import type { IMarketData } from '@/types';
import Image from 'next/image';

export default async function MarketDataPage() {
  const result: IMarketData = await fetchMarkets();

  return (
    <div className="py-4 text-center">
      <h2>
        Total Cryptomarket Cap: <b>{result.marketCap.toLocaleString()}$</b>{' '}
        {result.marketCapChange.toFixed(1)}%
      </h2>
      <Image
        src="/images/markets-568x322.webp"
        alt=""
        width={568}
        height={322}
        className="mx-auto"
      />

      <h2 className='mt-4'>
        Bitcoin dominance: <b>{result.btcDominance.toFixed(1)}%</b>{' '}
        {result.btcDominanceChange.toFixed(1)}%
      </h2>
      <Image
        src="/images/bitcoin_dom.webp"
        alt=""
        width={568}
        height={320}
        className="mx-auto"
      />
    </div>
  );
}
