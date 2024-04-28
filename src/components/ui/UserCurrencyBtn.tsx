'use client';

import { useCurrencyStore } from '@/configs/store';

export const UserCurrencyBtn = () => {
    const currency = useCurrencyStore(state => state.currency);

  return (
    <div className="ml-auto">{currency}</div>
  )
}
