import { SearchCoinsForm } from '@/components/ui/SearchCoinsForm';
import { searchCoin } from '@/utils/fetchCoinList';
import { SearchResultList } from '@/components/ui/SearchResultList';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = (searchParams?.query || '') as string;

  let searchResultList = [];

  if (query.trim().length > 2) {
    const result = await searchCoin(query);

    searchResultList = result.coins;
  }

  return (
    <div className="mx-auto max-w-7xl text-center">
      <SearchCoinsForm />

      <SearchResultList searchResultList={searchResultList} />
    </div>
  );
}
