import { fetchCoinList } from "@/utils/fetchCoinList";
import { Pagination } from "@/components/ui/Pagination";
import { CoinTable } from "@/components/CoinTable";

export default async function HomePage({
  searchParams,
}: {
  searchParams: { page: number, currency: string };
}) {
  const page = searchParams["page"] ?? "1";
  const currency = searchParams["currency"] ?? "USD";

  const totalCoinList = await fetchCoinList(page, currency);

  return (
    <div className="text-center mx-auto max-w-max">
      <CoinTable coinList={totalCoinList.result} currencyName={currency} />

      <Pagination metaInfo={totalCoinList.meta} />
    </div>
  );
}
