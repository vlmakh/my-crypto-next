'use client';

import { redirect } from 'next/navigation';
import { fetchInfoByUserWatchList } from '@/utils/fetchCoinList';
import { CoinList } from '@/components/CoinList';
import { useUserStore, useWatchListStore } from '@/configs/store';
import { db } from '@/configs/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { LoaderSpinner } from '@/components/ui/LoaderSpinner';

export const Watchlist = () => {
  const uid = useUserStore(state => state.uid);
  const setWatchlistState = useWatchListStore(state => state.setWatchlistState);
  const watchlist = useWatchListStore(state => state.watchlist);

  {
    !uid && redirect(`/signin`);
  }

  const [userCoinList, setUserCoinList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    fetchInfoByUserWatchList(watchlist, controller.signal)
      .then((data: any) => setUserCoinList(data))
      .finally(() => setIsLoading(false));
  }, [watchlist]);

  return (
    <>
      {isLoading && <LoaderSpinner />}

      {userCoinList.length > 0 && <CoinList coinList={userCoinList} />}
    </>
  );
};
