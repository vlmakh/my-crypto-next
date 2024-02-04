'use client';

import { redirect } from 'next/navigation';
import { fetchInfoByUserWatchList } from '@/utils/fetchCoinList';
import { CoinList } from '@/components/CoinList';
import { useUserStore, useWatchListStore } from '@/configs/store';
import { db } from '@/configs/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';

export default function WatchlistPage() {
  const uid = useUserStore(state => state.uid);
  const name = useUserStore(state => state.name);
  const email = useUserStore(state => state.email);
  const setWatchlistState = useWatchListStore(state => state.setWatchlistState);
  const watchlist = useWatchListStore(state => state.watchlist);

  {
    !uid && redirect(`/signin`);
  }

  const [userCoinList, setUserCoinList] = useState([]);

  const controller = new AbortController();

  useEffect(() => {
    const watchlistRef = doc(db, 'watchlist', uid);
    const loadWatchlistFromFirebase = onSnapshot(watchlistRef, coin => {
      if (coin.exists()) {
        setWatchlistState(coin.data().coins);
      } else {
        console.log('No Items in Watchlist');
      }
    });

    return () => {
      loadWatchlistFromFirebase();
    };
  }, []);

  useEffect(() => {
    fetchInfoByUserWatchList(watchlist, controller.signal).then((data: any) =>
      setUserCoinList(data)
    );
  }, [watchlist]);

  return (
    <>
      <h1 className="py-5 text-center">{name ? name : email}</h1>

      {userCoinList.length > 0 && <CoinList coinList={userCoinList} />}
    </>
  );
}
