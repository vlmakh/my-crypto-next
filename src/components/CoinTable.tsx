import type { ICoin } from '@/types';
import { CoinTableItem } from './CoinTableItem';

type Props = {
  coinList: ICoin[];
  currencyName: string;
};

export const CoinTable = ({ coinList, currencyName }: Props) => {
  return (
    <table>
      <thead>
        <tr className="border-b-2">
          <th>#</th>
          <th className="pl-2 text-left">Name</th>
          <th className="pr-2 text-right">Price</th>
          <th className="pr-2 text-right">1h%</th>
          <th className="pr-2 text-right">1d%</th>
          <th className="pr-2 text-right">1w%</th>
          <th>Market Cap $</th>
        </tr>
      </thead>

      <tbody>
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
      </tbody>
    </table>
  );
};
