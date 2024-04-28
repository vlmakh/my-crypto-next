'use client';

import { useCurrencyStore } from '@/configs/store';
import { useState } from 'react';
import { UserCurrencyMenu } from './UserCurrencyMenu';
import Image from 'next/image';

export const UserCurrencyBtn = () => {
  const currency = useCurrencyStore(state => state.currency);
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <>
      <button title="Select Currency"
        className="flex gap-2 ml-auto font-bold transition-colors hover:text-yellow-500"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <Image
          src={currency.imageUrl}
          alt={currency.name}
          width={20}
          height={20}
        />
        {currency.name}
      </button>

      {showDropDown && (
        <UserCurrencyMenu
          setShowDropDown={setShowDropDown}
          showDropDown={showDropDown}
        />
      )}
    </>
  );
};
