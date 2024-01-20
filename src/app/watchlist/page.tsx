import { getServerSession } from "next-auth";
import { authConfig } from "@/configs/auth";
import { queryWatchList } from "@/data/queryWatchList";
import { userWatchList } from "@/utils/fetchCoinList";
import { CoinList } from "@/components/CoinList";

export default async function WatchlistPage() {
  const session = await getServerSession(authConfig);

  const controller = new AbortController();

  const userCoinList = await userWatchList(queryWatchList, controller.signal);

  return (
    <>
      <h1 className="text-center py-5">{session?.user?.name}</h1>

      {userCoinList.length > 0 ? (
        <CoinList coinList={userCoinList} />
      ) : (
        <p className="text-center">Watchlist is empty</p>
      )}
    </>
  );
}
