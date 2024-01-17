"use client";

import { useState, useEffect } from "react";
// import { historicalChart } from '@/utils/fetchCoinList';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
// import { ICoin } from '@/types';

// const TooltipContent = (props: { active: any; payload: { payload: any; }[]; }) => {
//   if (!props.active || !props.payload || !props.payload.payload) {
//     return;
//   }

//   const info = props.payload[0].payload;

//   return (
//     <div style={{ padding: 4 }}>
//       <div>{info?.price}</div>
//       <div>{info?.time}</div>
//     </div>
//   );
// };

type Props = {
  id: string;
};

type CoinData = any[];

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-KEY": "r9FNSR3h4KySY93Gz9AJaYZMII+7fsxA7b1mvlPVQhY=",
  },
};

async function historicalChart(id: string, period = "1y") {
  const response = await fetch(
    `https://openapiv1.coinstats.app/coins/${id}/charts?period=${period}`,
    options
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export const CoinChart = ({ id }: Props) => {
  const [coinData, setCoinData] = useState<CoinData>([]);
  const [period, setPeriod] = useState("1y");

  useEffect(() => {
    const newCoinData: CoinData = [];

    historicalChart(id, period)
      .then((coinPrices) => {
        for (let i = 0; i < coinPrices.length; i++) {
          newCoinData.push({
            time: coinPrices[i][0],
            price: coinPrices[i][1],
          });
        }

        // console.log(newCoinData);

        setCoinData(newCoinData);
      })
      .catch((error) => console.log(error.message));
  }, [id, period]);

  return (
    <div className="">
      <LineChart data={coinData} width={768} height={400}>
        <Line
          dot={false}
          stroke="orange"
          strokeWidth={2}
          dataKey={"price"}
          isAnimationActive={false}
        />
        <CartesianGrid stroke="grey" strokeDasharray="5 5" />
        <XAxis dataKey={"time"} />
        <YAxis unit="$" />

        {/* <Tooltip isAnimationActive={false} content={<TooltipContent />} /> */}
      </LineChart>
    </div>
  );
};
