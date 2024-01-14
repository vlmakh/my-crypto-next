import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/utils/formatPrice";

const MAIN_URL = 'https://openapiv1.coinstats.app';

async function fetchCoinList(page = 1) {
  const response = await fetch(`${MAIN_URL}/coins/?page=${page}`);

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
      {coinList.result &&
        coinList.result
          .sort((a: { rank: number }, b: { rank: number }) => a.rank - b.rank)
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
                    <p>{(+coin.priceChange1d).toFixed(1)}%</p>
                    <p>{coin.rank}</p>{" "}
                  </Link>
                </li>
              )
          )}
      </ul>
      </>
  );
}
