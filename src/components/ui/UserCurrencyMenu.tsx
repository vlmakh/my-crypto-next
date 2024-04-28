'use client';

import { useRef, useEffect, useState } from 'react';
import { fetchFiats } from '@/utils/fetchCoinList';
import { ICurrency } from '@/types';
import Image from 'next/image';
import { useCurrencyStore } from '@/configs/store';
import { useRouter, useSearchParams } from 'next/navigation';

type Props = {
  showDropDown: boolean;
  setShowDropDown: any;
};

export const UserCurrencyMenu = ({ showDropDown, setShowDropDown }: Props) => {
  const dropdown = useRef<HTMLDivElement>(null);
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);
  const setCurrency = useCurrencyStore(state => state.setCurrency);
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage =
    Number(searchParams.get('page')) === 0
      ? 1
      : Number(searchParams.get('page'));

  useEffect(() => {
    fetchFiats().then((data: ICurrency[]) => setCurrencies(data));
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        setShowDropDown(false);
      }
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  useEffect(() => {
    if (!showDropDown) return;

    const handleMouseClick = (event: MouseEvent) => {
      if (!dropdown.current?.contains(event.target as Node)) {
        setShowDropDown(false);
      }
    };
    document.addEventListener('click', handleMouseClick);

    return () => document.removeEventListener('click', handleMouseClick);
  }, [showDropDown]);

  return (
    <div
      className="absolute left-0 top-10 z-20 w-full  bg-slate-200 p-4 dark:bg-slate-800"
      ref={dropdown}
    >
      UserCurrencyMenu
      <ul className="flex flex-wrap gap-2">
        {currencies.map(item => (
          <li
            key={item.name}
            className="flex w-24 gap-2 rounded-md px-2 py-4 transition-colors hover:bg-slate-800"
            onClick={() => {
              setCurrency(item);

              setShowDropDown(false);

              router.push(`/coins/?page=${currentPage}&currency=${item.name}`);
            }}
          >
            <Image src={item.imageUrl} alt={item.name} width={24} height={24} />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
