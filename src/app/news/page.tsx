import { fetchNewsList } from '@/utils/fetchCoinList';
import type { INewsItem } from '@/types';
import { Container } from '@/components/Container';
import { formatMStoDate } from '@/utils/formatDate';

export default async function NewsPage() {
  const totalNewsList = await fetchNewsList(1);

  return (
    <Container>
      <ul className="px-4 sm:px-0">
        {totalNewsList.map((item: INewsItem) => (
          <li key={item.id} className="group border-b-2 py-2">
            <a
              href={item.link}
              target="_blank"
              className="font-bold transition-colors group-hover:text-yellow-500"
            >
              {item.title}
            </a>

            <p className="text-justify text-sm">{item.description}</p>

            <div className="mt-2 flex justify-between text-sm">
              <p>{item.source}</p>
              <p>{formatMStoDate(item.feedDate)}</p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
