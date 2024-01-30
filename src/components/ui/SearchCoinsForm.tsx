'use client';

import { useState, useEffect } from 'react';
import { searchCoin } from '@/utils/fetchCoinList';
import Image from 'next/image';
import Link from 'next/link';

type ICoinFound = {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
};

export const SearchCoinsForm = () => {
  const [searchResultList, setSearchResultList] = useState([]);
  // let resultArray: never[] | III[] = [];
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.length > 2 || !query.length) {
      searchCoin(query).then((data: any) => setSearchResultList(data.coins));
    }
  }, [query]);

  const handleInput = (e: { target: { value: string } }) => {
    // console.log(e.target.value)

    setQuery(e.target.value);
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
      <form className="mt-6">
        <button
          type="submit"
          className="rounded-md bg-yellow-500 px-2 text-xl font-bold text-black transition-colors hover:bg-yellow-300 disabled:opacity-40"
        >
          Search
        </button>

        <label>
          <input
            onChange={handleInput}
            placeholder="by coin name or symbol"
            name="query"
            value={query}
            className="rounded-md border-0 bg-white/5 px-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
          />

          <button
            type="button"
            onClick={() => {
              setQuery('');
            }}
          >
            X
          </button>
        </label>
      </form>

      <ul>
        {searchResultList.length > 0 &&
          searchResultList.map((coin: ICoinFound) => (
            <li className="mx-auto max-w-min border-b-2" key={coin.id}>
              <Link
                href={`/coins/${coin.id}`}
                className="group flex items-center gap-4 px-2 py-1"
              >
                <Image
                  src={coin.large}
                  alt={coin.id}
                  width={48}
                  height={48}
                  className="transition-transform group-hover:scale-110"
                />

                <div className="w-44 text-left">
                  <p className="text-xl font-bold transition-colors group-hover:text-yellow-500">
                    {coin.symbol}
                  </p>

                  <p className="transition-colors group-hover:text-yellow-500">
                    {coin.name}
                  </p>
                </div>

                <p className="w-11 text-right text-sm">
                  {coin.market_cap_rank}
                </p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
