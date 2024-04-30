import type { ICoin } from '@/types';
import { CoinTableItem } from './CoinTableItem';

type Props = {
  coinList: ICoin[];
  currencyName: string;
};

export const CoinTable = ({ coinList, currencyName }: Props) => {
  return (
    <table>
      {coinList
        .sort((a: { rank: number }, b: { rank: number }) => a.rank - b.rank)
        .map(
          coin =>
            coin && (
              <CoinTableItem
                key={coin.id}
                coin={coin}
                currencyName={currencyName}
              />
            )
        )}
    </table>
  );
};
