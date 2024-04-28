import { fetchCoinList } from "@/utils/fetchCoinList";
import { Pagination } from "@/components/ui/Pagination";
import { CoinList } from "@/components/CoinList";

export default async function CoinsPage({
  searchParams,
}: {
  searchParams: { page: number, currency: string };
}) {
  const page = searchParams["page"] ?? "1";
  const currency = searchParams["currency"] ?? "USD";

  const totalCoinList = await fetchCoinList(page, currency);

  return (
    <div className="w-full text-center sm:mx-auto sm:max-w-lg">
      <CoinList coinList={totalCoinList.result} currency={currency} />

      <Pagination metaInfo={totalCoinList.meta} />
    </div>
  );
}
