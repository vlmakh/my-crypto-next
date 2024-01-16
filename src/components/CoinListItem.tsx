import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/utils/formatPrice";

import { ICoin } from "@/types";

export const CoinListItem = ({ coin }: { coin: ICoin }) => {
  return (
    <li className="mx-auto max-w-min border-b-2">
      <Link href={`/coins/${coin.id}`} className="flex gap-4 py-1 px-2 items-center">
        <Image src={coin.icon} alt={coin.id} width={48} height={48} />

        <div className="text-left w-44">
          <p className="font-bold text-xl">{coin.symbol}</p>

          <p>{coin.name}</p>
        </div>

        <p className="font-bold w-20 text-right">{formatPrice(coin.price)}</p>

        <p className="w-16 text-right">{(+coin.priceChange1d).toFixed(1)}%</p>

        <p className="text-sm w-11 text-right">{coin.rank}</p>
      </Link>
    </li>
  );
};
