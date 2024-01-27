"use client";

import { redirect } from "next/navigation";
import { fetchInfoByUserWatchList } from "@/utils/fetchCoinList";
import { CoinList } from "@/components/CoinList";
import { useUserStore } from "@/configs/store";
import { db } from "@/configs/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function WatchlistPage() {
  const uid = useUserStore((state) => state.uid);
  const name = useUserStore((state) => state.name);
  const updateWatchListState = useUserStore(
    (state) => state.updateWatchListState
  );

  {
    !uid && redirect(`/signin`);
  }

  const [watchList, setWatchList] = useState([]);
  const [userCoinList, setUserCoinList] = useState([]);

  const controller = new AbortController();

  useEffect(() => {
    const watchlistRef = doc(db, "watchlist", uid);
    const unsubscribe = onSnapshot(watchlistRef, (coin) => {
      if (coin.exists()) {
        setWatchList(coin.data().coins);
        updateWatchListState(coin.data().coins);
      } else {
        console.log("No Items in Watchlist");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    fetchInfoByUserWatchList(watchList, controller.signal).then((data: any) =>
      setUserCoinList(data)
    );
  }, [watchList]);

  return (
    <>
      <h1 className="text-center py-5">{name}</h1>

      {userCoinList.length > 0 ? (
        <CoinList coinList={userCoinList} />
      ) : (
        <p className="text-center">Watchlist is empty</p>
      )}
    </>
  );
}
