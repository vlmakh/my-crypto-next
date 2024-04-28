import currencies from '@/data/fiats.json';
import type { ICurrency } from '@/types';

export const formatCurrency = (currencyName: string) => {
  const result = currencies.find((el: ICurrency) => el.name === currencyName);

  return result?.symbol;
};
