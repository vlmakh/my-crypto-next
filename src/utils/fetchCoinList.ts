const MAIN_URL = process.env.NEXT_PUBLIC_MAIN_URL;
const SEARCH_URL = process.env.NEXT_PUBLIC_SEARCH_URL;
import type { RequestInit } from 'next/dist/server/web/spec-extension/request';

const options: RequestInit = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': `${process.env.NEXT_PUBLIC_MAIN_KEY}`,
  },
  cache: 'no-cache',
};

export async function fetchCoinList(page: number) {
  const response = await fetch(`${MAIN_URL}/coins/?page=${page}`, options);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export async function fetchCoinItem(id: string) {
  const response = await fetch(`${MAIN_URL}/coins/${id}`, options);

  if (!response.ok) {
    // throw new Error("Failed to fetch data");
    return null;
  }

  return response.json();
}

export const historicalChart = async (id: string, period: string) => {
  const response = await fetch(
    `${MAIN_URL}/coins/${id}/charts?period=${period}`,
    options
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};

export const fetchInfoByUserWatchList = async (
  array: string[],
  abortSignal: AbortSignal
) => {
  const arrayOfCoins = array.map(async coinId => {
    return await fetch(`${MAIN_URL}/coins/${coinId}`, {
      ...options,
      signal: abortSignal,
    })
      .then(response => {
        return response.json();
      })
      .catch(error => {});
  });

  const response = await Promise.all(arrayOfCoins);
  return response;
};

export const searchCoin = async (query: string) => {
  const response = await fetch(`${SEARCH_URL}/search/?query=${query}`);

  return response.json();
};

export async function fetchNewsList(page: number) {
  const response = await fetch(`${MAIN_URL}/news/type/latest?page=${page}&limit=6`, options);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
