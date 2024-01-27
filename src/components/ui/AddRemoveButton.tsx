"use client";

import { doc, setDoc } from "firebase/firestore";
import { db } from "@/configs/firebase";
import { useUserStore } from "@/configs/store";

type Props = {
  coinId: string;
  watchlist: string[];
};

export const AddRemoveButton = ({ coinId, watchlist }: Props) => {
  const uid = useUserStore((state) => state.uid);
  const inWatchlist = watchlist.includes(coinId);

  const coinRef = doc(db, "watchlist", uid);

  const addToWatchlist = async () => {
    try {
      await setDoc(
        coinRef,
        { coins: watchlist ? [...watchlist, coinId] : [coinId] },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWatchlist = async () => {
    try {
      await setDoc(
        coinRef,
        { coins: watchlist.filter((id) => id !== coinId) },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  // const handleadd = () => {
  //   addToWatchlist()
  //     .then(() => console.log("added"))
  //     .catch((e) => console.log(e));
  // };

  // const handleremove = () => {
  //   removeFromWatchlist()
  //     .then(() => console.log("removed"))
  //     .catch((e) => console.log(e));
  // };

  return (
    <>
      {uid && (
        <button
          onClick={inWatchlist ? removeFromWatchlist : addToWatchlist}
          className="py-3 transition-colors text-xl font-semibold"
        >
          <span className="inline-block hover:text-yellow-500 hover:scale-150 transition-all">
            {/* {inWatchlist ? decode('&#x2605;') : decode('&#x2606;')} */}
            &#x2606;
          </span>
        </button>
      )}
    </>
  );
};
