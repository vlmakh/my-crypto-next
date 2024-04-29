import { CoinListItem } from './CoinListItem';
import type { ICoin } from '@/types';

type Props = {
  coinList: ICoin[];
  currencyName: string;
};

export const CoinList = ({ coinList, currencyName }: Props) => {
  return (
    <ul>
      {coinList
        .sort((a: { rank: number }, b: { rank: number }) => a.rank - b.rank)
        .map(
          coin =>
            coin && (
              <CoinListItem key={coin.id} coin={coin} currencyName={currencyName} />
            )
        )}
    </ul>
  );
};
