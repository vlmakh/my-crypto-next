import type { ICoin } from '@/types';
import { CoinTableItem } from './CoinTableItem';

type Props = {
  coinList: ICoin[];
  currencyName: string;
};

export const CoinTable = ({ coinList, currencyName }: Props) => {
  return (
    <table className='mx-auto'>
      <thead>
        <tr className="border-b-2">
          <th>#</th>
          <th className="pl-2 text-left py-2">Name</th>
          <th className="pr-2 text-right">Price</th>
          <th className="hidden pr-2 text-right md:table-cell">1h%</th>
          <th className="pr-2 text-right">1d%</th>
          <th className="hidden pr-2 text-right md:table-cell">1w%</th>
          <th className="hidden md:table-cell">Market Cap $</th>
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
