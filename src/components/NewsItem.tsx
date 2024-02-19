import Image from 'next/image';
import { formatMStoDate } from '@/utils/formatDate';
import type { INewsItem } from '@/types';

export const NewsItem = ({ item }: { item: INewsItem }) => {
  return (
    <li
      className="relative max-h-[324px] w-full overflow-hidden sm:h-[324px] sm:w-[600px]"
    >
      <a
        href={item.link}
        target="_blank"
        className="group overflow-hidden transition-colors before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-b before:from-transparent before:to-slate-700 group-hover:text-yellow-500"
      >
        <Image
          src={item.imgUrl}
          alt={item.title}
          width={400}
          height={225}
          className="h-full w-full transform object-cover duration-200 ease-in group-hover:scale-105"
          priority
        />

        <div className="w-full absolute bottom-2 z-10 px-2 text-white duration-200 ease-in group-hover:-translate-y-2">
          <p className="font-bold"> {item.title}</p>

          <p className="hidden text-justify text-sm sm:block">
            {item.description}
          </p>

          <div className="mt-2 flex justify-between text-sm">
            <p>{item.source}</p>
            <p>{formatMStoDate(item.feedDate)}</p>
          </div>
        </div>
      </a>
    </li>
  );
};
