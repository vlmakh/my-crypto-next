'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useCurrencyStore } from '@/configs/store';

export const SearchCoinsForm = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const currency = useCurrencyStore(state => state.currency);

  const params = new URLSearchParams(searchParams);

  const handleInput = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;

      if (query) {
        params.set('query', query);
      } else {
        params.delete('query');
      }
      replace(`${pathname}?${params.toString()}&currency=${currency.name}`);
    },
    400
  );

  const handleDelete = () => {
    params.delete('query');
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form className="mx-auto mt-6 max-w-96">
      <label className="group relative">
        <input
          onChange={handleInput}
          placeholder="Search by coin name or symbol"
          defaultValue={searchParams.get('query')?.toString()}
          autoComplete="off"
          className="w-full rounded-md border-2 bg-white/5 px-2 py-1.5 text-black dark:invert shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
        />

        <button
          type="reset"
          className="absolute right-2 px-2 py-1 text-transparent transition-colors group-hover:text-gray-500"
          onClick={handleDelete}
        >
          &#x2716;
        </button>
      </label>
    </form>
  );
};
