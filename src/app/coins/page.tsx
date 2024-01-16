import { CoinListItem } from "@/components/CoinListItem";
import { fetchCoinList } from "@/utils/fetchCoinList";
// import ReactPaginate from "react-paginate";
import { ICoin } from "@/types";

export default async function CoinsPage() {
  const coinList = await fetchCoinList(1);

  // async const handlePageClick = () => {
  // coinList = await fetchCoinList();
  // }

  return (
    <>
      <ul>
        {coinList.result &&
          coinList.result.map(
              (coin: ICoin) => coin && <CoinListItem key={coin.id} coin={coin} />
            )}
      </ul>

      
    </>
  );
}