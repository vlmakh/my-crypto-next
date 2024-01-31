'use client';

import { useState } from 'react';
import { searchCoin } from '@/utils/fetchCoinList';
import type { ICoinFound } from '@/types';
import { SearchResultListItem } from './SearchResultListItem';

export const SearchCoinsForm = () => {
  const [query, setQuery] = useState('');
  const [searchResultList, setSearchResultList] = useState([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    if (e.target.value.length > 2) {
      searchCoin(e.target.value).then((data: any) => setSearchResultList(data.coins));
    } else {
      setSearchResultList([]);
    }
  };

  function handleSubmit(data: FormData) {
    // 'use server';

    const { query } = Object.fromEntries(data);

    // const response = await fetch(
    //   `https://api.coingecko.com/api/v3/search/?query=${query}`
    // );

    // const result = await response.json();

    // resultArray = result.coins;

    // console.log(resultArray.coins);
  }

  return (
    <>
      <form className="mx-auto mt-6 max-w-96"> 
        <label className="group relative">
          <input
            onChange={handleInput}
            placeholder="by coin name or symbol"
            name="query"
            value={query}
            autoComplete="off"
            className="w-full rounded-md border-0 bg-white/5 px-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
          />

          <button
            type="button"
            className="absolute right-2 px-2 py-1 text-transparent transition-colors group-hover:text-gray-500"
            onClick={() => {
              setQuery('');
              setSearchResultList([]);
            }}
          >
            &#x2716;
          </button>
        </label>
      </form>

      <ul className="flex flex-wrap justify-center gap-4 py-4 ">
        {searchResultList.length > 0 &&
          searchResultList.map((coin: ICoinFound) => (
            <SearchResultListItem key={coin.id} coin={coin} />
          ))}
      </ul>
    </>
  );
};
