import { fetchNewsList } from '@/utils/fetchCoinList';
import type { INewsItem } from '@/types';
import { Container } from '@/components/Container';
import { formatMStoDate } from '@/utils/formatDate';
import Image from 'next/image';

export default async function NewsPage() {
  const totalNewsList = await fetchNewsList(1);

  return (
    <Container>
      <ul>
        {totalNewsList.map((item: INewsItem) => (
          <li
            key={item.id}
            className="group relative max-h-[324px] overflow-hidden border-b-2 py-2"
          >
            <a
              href={item.link}
              target="_blank"
              className="h-full overflow-hidden transition-colors before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-b before:from-transparent before:to-slate-700 group-hover:text-yellow-500"
            >
              <Image
                src={item.imgUrl}
                alt={item.title}
                width={400}
                height={225}
                className="h-full w-full transform object-cover duration-200 ease-in group-hover:scale-105"
              />

              <div className="absolute bottom-2 z-10 px-2 text-white">
                <p className="font-bold"> {item.title}</p>

                <p className="text-justify text-sm">{item.description}</p>

                <div className="mt-2 flex justify-between text-sm">
                  <p>{item.source}</p>
                  <p>{formatMStoDate(item.feedDate)}</p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}
