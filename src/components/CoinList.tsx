import { CoinListItem } from "./CoinListItem";
import { ICoin } from "@/types";

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
        .sort((a: { rank: number }, b: { rank: number }) => a.rank - b.rank)
        .map(
          (coin: ICoin) => coin && <CoinListItem key={coin.id} coin={coin} />
        )}
    </ul>
  );
}
