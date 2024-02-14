import { fetchNewsList } from '@/utils/fetchCoinList';
import type { INewsItem } from '@/types';
import Image from 'next/image';

export default async function NewsPage() {
  const totalNewsList = await fetchNewsList(1);

  return (
    <>
      <h1 className="text-center">News</h1>

      <ul>
        {totalNewsList.result.map((item: INewsItem) => (
            <li key={item.id}>{item.title}
                {/* <Image src={item.imgUrl} alt={item.title} width={300} height={181} /> */}
            </li>
        ))}
      </ul>
    </>
  );
}
