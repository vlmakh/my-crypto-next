'use client';

import { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export const SearchCoinsForm = () => {
  const searchParams = useSearchParams();
  const [valueQuery, setValueQuery] = useState(searchParams.get('query')?.toString() ?? '');
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setValueQuery(query);

    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleDelete = () => {
    params.delete('query');
    replace(`${pathname}?${params.toString()}`);
    setValueQuery('');
  };

  return (
    <form className="mx-auto mt-6 max-w-96">
      <label className="group relative">
        <input
          onChange={handleInput}
          placeholder="by coin name or symbol"
          value={valueQuery}
          autoComplete="off"
          className="w-full rounded-md border-0 bg-white/5 px-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
        />

        <button
          type="button"
          className="absolute right-2 px-2 py-1 text-transparent transition-colors group-hover:text-gray-500"
          onClick={handleDelete}
        >
          &#x2716;
        </button>
      </label>
    </form>
  );
};
