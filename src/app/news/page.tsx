import { fetchNewsList } from '@/utils/fetchCoinList';
import type { INewsItem } from '@/types';
import { Container } from '@/components/Container';

export default async function NewsPage() {
  const totalNewsList = await fetchNewsList(1);

  return (
    <Container>
      <h1 className="text-center">News</h1>

      <ul>
        {totalNewsList.map((item: INewsItem) => (
          <li key={item.id} className="group border-b-2">
            <a
              href={item.link}
              target="_blank"
              className="font-bold transition-colors group-hover:text-yellow-500"
            >
              {item.title}
            </a>

            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
