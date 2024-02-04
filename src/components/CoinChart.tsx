'use client';

import { useState, useEffect } from 'react';
import { historicalChart } from '@/utils/fetchCoinList';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { formatAxisDate } from '@/utils/formatDate';
import choose from '@/data/periods.json';
import { Formik, Form, Field } from 'formik';
import { TooltipProps } from 'recharts';
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const info = payload?.[0].payload;

    return (
      <div className="bg-inherit p-4">
        <div>{info?.price}</div>
        <div>{info?.time}</div>
      </div>
    );
  }

  return null;
};

type CoinData = { time: string | undefined; price: number };

export const CoinChart = ({ id }: { id: string }) => {
  const [coinData, setCoinData] = useState<CoinData[]>([]);
  const [period, setPeriod] = useState('1y');

  useEffect(() => {
    const newCoinData: CoinData[] = [];

    historicalChart(id, period)
      .then(coinPrices => {
        for (let i = 0; i < coinPrices.length; i++) {
          newCoinData.push({
            time: formatAxisDate(coinPrices[i][0]),
            price: coinPrices[i][1],
          });
        }

        setCoinData(newCoinData);
      })
      .catch(error => console.log(error.message));
  }, [id, period]);

  const handleRadio = (e: any) => {
    setPeriod(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <>
      <ResponsiveContainer width="100%" height={400} className="py-2">
        <LineChart data={coinData}>
          <Line
            dot={false}
            stroke="orange"
            strokeWidth={2}
            dataKey={'price'}
            isAnimationActive={false}
          />
          <CartesianGrid stroke="grey" strokeDasharray="5 5" />
          <XAxis dataKey={'time'} className="text-sm" />
          <YAxis unit="$" className="text-sm font-bold" />

          <Tooltip
            isAnimationActive={false}
            content={<CustomTooltip active={false} payload={[]} />}
          />
        </LineChart>
      </ResponsiveContainer>

      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          period,
        }}
      >
        <Form onChange={handleRadio} className="flex justify-center gap-3">
          {choose.periods.map(p => (
            <label key={p} className="hover:cursor-pointer">
              <Field type="radio" name="period" value={p} />
              {p}
            </label>
          ))}
        </Form>
      </Formik>
    </>
  );
};
