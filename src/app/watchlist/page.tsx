// import { getServerSession } from "next-auth";
// import { authConfig } from "@/configs/auth";
// import { redirect } from "next/navigation";
import { queryWatchList } from "@/data/queryWatchList";
import { fetchInfoByUserWatchList } from "@/utils/fetchCoinList";
import { CoinList } from "@/components/CoinList";
// import { useUserStore } from "@/configs/store";
// import { db } from "@/configs/firebase";
// import { doc, getDoc, onSnapshot } from "firebase/firestore";
// import { useState, useEffect } from "react";

export default async function WatchlistPage() {
  // const session = await getServerSession(authConfig);
  // const [watchList, setWatchList] = useState([]);

  const controller = new AbortController();
  // const uid = useUserStore((state) => state.uid);
  // const name = useUserStore((state) => state.name);

  // {
  //   !uid && redirect(`/`);
  // }

  // useEffect(() => {
  //   // localStorage.setItem('mycrypto', JSON.stringify(user));

  //   const watchlistRef = doc(db, "watchlist", uid);
  //   const unsubscribe = onSnapshot(watchlistRef, (coin) => {
  //     if (coin.exists()) {
  //       setWatchList(coin.data().coins);
  //       console.log(coin.data().coins);
  //     } else {
  //       console.log("No Items in Watchlist");
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [uid]);

  //   const value = doc(db, 'watchlist', uid);
  //   const docSnap = await getDoc(value);

  //   if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // }

    const userCoinList = await fetchInfoByUserWatchList(queryWatchList, controller.signal);

  return (
    <>
      {/* <h1 className="text-center py-5">{name}</h1> */}

      {userCoinList.length > 0 ? (
        <CoinList coinList={userCoinList} />
      ) : (
        <p className="text-center">Watchlist is empty</p>
      )}
    </>
  );
}
