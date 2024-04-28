'use client';

import { useCurrencyStore } from '@/configs/store';
import { useState } from 'react';
import { UserCurrencyMenu } from './UserCurrencyMenu';

export const UserCurrencyBtn = () => {
  const currency = useCurrencyStore(state => state.currency);
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <>
      <button
        className="ml-auto font-bold transition-colors hover:text-yellow-500"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        {currency}
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
