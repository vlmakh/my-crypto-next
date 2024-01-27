import { fetchCoinList } from "@/utils/fetchCoinList";
import { Pagination } from "@/components/ui/Pagination";
import { CoinList } from "@/components/CoinList";
import { Container } from "@/components/Container";

export default async function CoinsPage({
  searchParams,
}: {
  searchParams: { page: number };
}) {
  const page = searchParams["page"] ?? "1";

  const totalCoinList = await fetchCoinList(page);

  return (
    <Container>
      <CoinList coinList={totalCoinList.result} />

      <Pagination metaInfo={totalCoinList.meta} />
    </Container>
  );
}
