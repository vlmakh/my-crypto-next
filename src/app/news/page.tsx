import { fetchNewsList } from '@/utils/fetchCoinList';
import type { INewsItem } from '@/types';
import { NewsItem } from '@/components/NewsItem';

export default async function NewsPage() {
  const totalNewsList: INewsItem[] = await fetchNewsList(1);

  return (
    <ul className="flex w-full flex-col items-center gap-4 px-5 py-4 xl:flex-row xl:flex-wrap xl:justify-center">
      {totalNewsList.map(item => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
