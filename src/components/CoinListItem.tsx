import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/utils/formatPrice";

import type { ICoin } from "@/types";

export const CoinListItem = ({ coin }: { coin: ICoin }) => {
  return (
    <li className="mx-auto max-w-min border-b-2">
      <Link href={`/coins/${coin.id}`} className="group flex gap-4 py-1 px-2 items-center">
        <Image src={coin.icon} alt={coin.id} width={48} height={48} className="transition-transform group-hover:scale-110"/>

        <div className="text-left w-44">
          <p className="font-bold text-xl group-hover:text-yellow-500 transition-colors">{coin.symbol}</p>

          <p className="group-hover:text-yellow-500 transition-colors">{coin.name}</p>
        </div>

        <p className={`font-bold w-32 text-right ${coin.priceChange1d >= 0 ? 'text-green-500' : 'text-red-500'}`}>{formatPrice(coin.price)}</p>

        <p className="w-24 text-right text-sm">{(+coin.priceChange1d).toFixed(1)}% <span className="text-opacity-50">1D</span></p>

        {/* <p className="text-sm w-11 text-right">{coin.rank}</p> */}
      </Link>
    </li>
  );
};
