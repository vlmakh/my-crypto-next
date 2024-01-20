import { CoinListItem } from "./CoinListItem";
import type { ICoin } from "@/types";

type Props = {
  coinList: ICoin[]
}

export const CoinList = ({coinList}: Props) => {
  return (
    <ul>
      {coinList
        .sort((a: { rank: number }, b: { rank: number }) => a.rank - b.rank)
        .map(
          (coin) => coin && <CoinListItem key={coin.id} coin={coin} />
        )}
    </ul>
  );
}
