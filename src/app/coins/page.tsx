import { CoinListItem } from "@/components/CoinListItem";
import { fetchCoinList } from "@/utils/fetchCoinList";
// import ReactPaginate from "react-paginate";

export default async function CoinsPage() {
  const coinList = await fetchCoinList();

  // async const handlePageClick = () => {
  // coinList = await fetchCoinList();
  // }

  return (
    <>
      <ul>
        {coinList.result &&
          coinList.result
            .sort((a: { rank: number }, b: { rank: number }) => a.rank - b.rank)
            .map(
              (coin: any) => coin && <CoinListItem key={coin.id} coin={coin} />
            )}
      </ul>

      
    </>
  );
}