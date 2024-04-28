'use client';

import { useRef, useEffect, useState } from 'react';
import { fetchFiats } from '@/utils/fetchCoinList';
import { ICurrency } from '@/types';
import Image from 'next/image';

type Props = {
  showDropDown: boolean;
  setShowDropDown: any;
};

export const UserCurrencyMenu = ({ showDropDown, setShowDropDown }: Props) => {
  const dropdown = useRef<HTMLDivElement>(null);
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);

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
          <li key={item.name}>
            <Image src={item.imageUrl} alt={item.name} width={40} height={40} />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
