import Image from "next/image";
import { NextResponse } from "next/server";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";

const MAIN_URL = process.env.NEXT_APP_MAIN_URL;

async function fetchCoinList(page = 1) {
  const response = await fetch(`${MAIN_URL}/coins/?page=${page}`);

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function CoinList() {
  const coinList = await fetchCoinList();

  return (
    <ul>
      {coinList
        .sort((a: {rank: number}, b: {rank: number}) => a.rank - b.rank)
        .map(
          (coin: any) =>
            coin && (
              <li key={coin.id}>
                {" "}
                <Link href={`/${coin.id}`}>
                  <Image src={coin.icon} alt={coin.id} width="48" />
                  <div className="ml-2 text-left">
                    <p>{coin.symbol}</p>
                    <p>{coin.name}</p>
                  </div>
                  <p>{formatPrice(coin.price)}</p>
                  <p>
                    {(+coin.priceChange1d).toFixed(1)}%
                  </p>
                  <p>{coin.rank}</p>{" "}
                </Link>
              </li>
            )
        )}
    </ul>
  );
}
