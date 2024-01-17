'use client'

import { useState, useEffect } from 'react';
import { historicalChart } from '@/utils/fetchCoinList';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { ICoin } from '@/types';

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
    id: string
}

type CoinData = any[]


export const CoinChart = ({id}: Props) => {
    const [coinData, setCoinData] = useState<CoinData>([]);
    const [period, setPeriod] = useState('24h');

    useEffect(() => {
    const newCoinData: CoinData = [];

    historicalChart(id, period)
      .then(coinPrices => {
        for (let i = 0; i < coinPrices.length; i++) {
          newCoinData.push({
            time: (coinPrices[i][0]),
            price: coinPrices[i][1],
          });
          }
          
          console.log(newCoinData);

        setCoinData(newCoinData);
      })
      .catch(error => console.log(error.message));
  }, [id, period]);

  return (
      <div>
          <LineChart data={coinData} width={768} height={400}>
          <Line
            dot={false}
            stroke="orange"
            strokeWidth={2}
            dataKey={'price'}
            isAnimationActive={false}
          />
          <CartesianGrid stroke="grey" strokeDasharray="5 5" />
          <XAxis dataKey={'time'} />
          <YAxis unit="$" />

          {/* <Tooltip isAnimationActive={false} content={<TooltipContent />} /> */}
        </LineChart>

    </div>
  )
}
