"use client";

import { useState, useEffect } from "react";
import { CoinListItem } from "./CoinListItem";
import { ICoin } from "@/types";
import { userWatchList } from "@/utils/fetchCoinList";

const query = ["bitcoin", "karlsen"];

export const WatchList = () => {
  const [userList, setUserList] = useState<ICoin[] | never[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    userWatchList(query)
      .then((data) => {
        setUserList(data);
      })
      .catch((error) => console.log("Network error"));
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <ul>
      {userList &&
        userList
          .sort((a: { rank: number }, b: { rank: number }) => a.rank - b.rank)
          .map(
            (coin: ICoin) => coin && <CoinListItem key={coin.id} coin={coin} />
          )}
    </ul>
  );
};
