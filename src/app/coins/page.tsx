import { fetchCoinList } from "@/utils/fetchCoinList";
import { Pagination } from "@/components/ui/Pagination";
import { CoinList } from "@/components/CoinList";

export default async function CoinsPage({
  searchParams,
}: {
  searchParams: { page: number };
}) {
  const page = searchParams["page"] ?? "1";

  const totalCoinList = await fetchCoinList(page);

  return (
    <>
      <CoinList coinList={totalCoinList.result} />

      <Pagination metaInfo={totalCoinList.meta} />
    </>
  );
}
