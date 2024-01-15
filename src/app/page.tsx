import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/utils/formatPrice";
import data from '@/data/response.json'

const MAIN_URL = process.env.MAIN_URL;

async function fetchCoinList(page = 1) {
  const response = await fetch(`${MAIN_URL}/coins/?page=${page}`);

  console.log(`${MAIN_URL}/coins/?page=${page}`)

  // if (!response.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }

  console.log(response.statusText);

  return response.json();
}

export default async function Home() {
  const coinList = await fetchCoinList();

  return (
    <><h1>Coin List</h1>
    <ul>
      {data.result &&
        data.result
          .sort((a: { rank: number }, b: { rank: number }) => a.rank - b.rank)
          .map(
            (coin: any) =>
              coin && (
                <li key={coin.id} className="mx-auto">                  
                  <Link href={`/${coin.id}`} className="flex gap-4 py-1 px-2 items-center">
                    <Image src={coin.icon} alt={coin.id} width={48} height={48} />

                    <div className="ml-2 text-left">
                      <p className="font-bold text-xl">{coin.symbol}</p>

                      <p>{coin.name}</p>
                    </div>

                    <p className="font-bold">{formatPrice(coin.price)}</p>

                    <p>{(+coin.priceChange1d).toFixed(1)}%</p>

                    <p className="text-sm">{coin.rank}</p>
                  </Link>
                </li>
              )
          )}
      </ul>
      </>
  );
}
