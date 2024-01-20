import { CoinListItem } from "@/components/CoinListItem";
import { fetchCoinList } from "@/utils/fetchCoinList";
import { Pagination } from "@/components/Pagination";
import type { ICoin } from "@/types";

export default async function CoinsPage({
  searchParams,
}: {
  searchParams: { page: number };
}) {
  const page = searchParams["page"] ?? "1";
  const coinList = await fetchCoinList(page);  

  return (
    <>
      <ul>
        {coinList.result &&
          coinList.result.map(
            (coin: ICoin) => coin && <CoinListItem key={coin.id} coin={coin} />
          )}
      </ul>

      <Pagination metaInfo={coinList.meta} />
    </>
  );
}
