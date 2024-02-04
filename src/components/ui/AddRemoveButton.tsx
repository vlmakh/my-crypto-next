'use client';

import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/configs/firebase';
import { useUserStore, useWatchListStore } from '@/configs/store';

type Props = {
  coinId: string;
};

export const AddRemoveButton = ({ coinId }: Props) => {
  const uid = useUserStore(state => state.uid);
  const watchlist = useWatchListStore(state => state.watchlist);
  const addCoinToWatchlistState = useWatchListStore(
    state => state.addCoinToWatchlistState
  );
  const removeCoinToWatchlistState = useWatchListStore(
    state => state.removeCoinToWatchlistState
  );
  const inWatchlist = watchlist.includes(coinId);

  const addToWatchlist = async () => {
    const coinRef = doc(db, 'watchlist', uid);

    try {
      await setDoc(
        coinRef,
        { coins: watchlist ? [...watchlist, coinId] : [coinId] },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    } finally {
      addCoinToWatchlistState(coinId);
    }
  };

  const removeFromWatchlist = async () => {
    const coinRef = doc(db, 'watchlist', uid);

    try {
      await setDoc(
        coinRef,
        { coins: watchlist.filter(id => id !== coinId) },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    } finally {
      removeCoinToWatchlistState(coinId);
    }
  };

  return (
    <>
      {uid && (
        <button
          onClick={inWatchlist ? removeFromWatchlist : addToWatchlist}
          className="group px-5 py-3 text-xl font-semibold transition-colors"
        >
          <span className="inline-block transition-all group-hover:scale-150 group-hover:text-yellow-500">
            {inWatchlist ? '\u2605' : '\u2606'}
          </span>
        </button>
      )}
    </>
  );
};
