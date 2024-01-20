import { getServerSession } from "next-auth";
import { authConfig } from "@/configs/auth";
import { queryWatchList } from "@/data/queryWatchList";
import { userWatchList } from "@/utils/fetchCoinList";
import type { ICoin } from "@/types";
import { CoinListItem } from "@/components/CoinListItem";

export default async function WatchlistPage() {
  const session = await getServerSession(authConfig);

  const controller = new AbortController();

  const userList = await userWatchList(queryWatchList, controller.signal)

  return (
    <>
      <h1 className="text-center py-5">{session?.user?.name}</h1>

      {userList.length > 0 ? (
        <ul>
          {userList
            .sort((a: { rank: number }, b: { rank: number }) => a.rank - b.rank)
            .map(
              (coin: ICoin) =>
                coin && <CoinListItem key={coin.id} coin={coin} />
            )}
        </ul>
      ) : (
        <p className="text-center">Watchlist is empty</p>
      )}
    
    </>
  );
}
