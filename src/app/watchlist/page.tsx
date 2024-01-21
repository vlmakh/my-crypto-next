import { getServerSession } from "next-auth";
import { authConfig } from "@/configs/auth";
import { queryWatchList } from "@/data/queryWatchList";
import { userWatchList } from "@/utils/fetchCoinList";
import { CoinList } from "@/components/CoinList";
// import { db } from '@/configs/firebase';
// import { doc, getDoc } from 'firebase/firestore';

export default async function WatchlistPage() {
  const session = await getServerSession(authConfig);

  const controller = new AbortController();

  const userCoinList = await userWatchList(queryWatchList, controller.signal);

//   const value = doc(db, 'watchlist', 'XTnfEzpKfFUTNRWJLElzfabS0so1');
//   const docSnap = await getDoc(value);

//   if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// }

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
