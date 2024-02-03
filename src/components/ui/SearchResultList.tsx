import { SearchResultListItem } from './SearchResultListItem';
import type { ICoinFound } from '@/types';

type Props = {
  searchResultList: ICoinFound[];
};

export const SearchResultList = ({ searchResultList }: Props) => {
  return (
    <ul className="flex flex-wrap justify-center gap-4 py-4 ">
      {searchResultList.length > 0 &&
        searchResultList.map((coin: ICoinFound) => (
          <SearchResultListItem key={coin.id} coin={coin} />
        ))}
    </ul>
  );
};
