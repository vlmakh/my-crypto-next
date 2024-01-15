import { CoinListItem } from "@/components/CoinListItem";
import { fetchCoinList } from "@/utils/fetchCoinList";


export default async function Home() {
  const coinList = await fetchCoinList();

  return (
    <ul>
      {coinList.result &&
        coinList.result
          .sort((a: { rank: number }, b: { rank: number }) => a.rank - b.rank)
          .map(
            (coin: any) => coin && <CoinListItem key={coin.id} coin={coin} />
          )}
    </ul>
  );
}
