"use client";

import { useState, useEffect } from "react";
import { CoinListItem } from "./CoinListItem";
import { ICoin } from "@/types";
import { userWatchList } from "@/utils/fetchCoinList";

type Props = {
  queryWatchList: string[];
};

export const WatchList = ({ queryWatchList }: Props) => {
  const [userList, setUserList] = useState<ICoin[] | never[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    userWatchList(queryWatchList, controller.signal)
      .then((data) => {
        setUserList(data);
      })
      .catch((error) => console.log("Network error"));

    return () => {
      controller.abort();
    };
  }, [queryWatchList]);

  return (
    <>
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
};
