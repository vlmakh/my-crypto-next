const MAIN_URL = process.env.NEXT_PUBLIC_MAIN_URL;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-KEY": `${process.env.NEXT_PUBLIC_MAIN_KEY}`,
  },
};

export async function fetchCoinList(page: number) {
  const response = await fetch(`${MAIN_URL}/coins/?page=${page}`, options);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export async function fetchCoinItem(id: string) {
  const response = await fetch(`${MAIN_URL}/coins/${id}`, options);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export const historicalChart = async (id: string, period: string) => {
  const response = await fetch(
    `${MAIN_URL}/coins/${id}/charts?period=${period}`, options
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  
  return response.json();
};

export const userWatchList = async (array: string[]) => {
  const arrayOfCoins = array.map(async coinId => {
    return await fetch(`${MAIN_URL}/coins/${coinId}`, options)
      .then(response => {
        return response.json();
      })
      .catch(error => {});
  });

  const response = await Promise.all(arrayOfCoins);
  return response;
};
