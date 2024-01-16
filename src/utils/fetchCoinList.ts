const MAIN_URL = process.env.MAIN_URL;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-KEY": "r9FNSR3h4KySY93Gz9AJaYZMII+7fsxA7b1mvlPVQhY=",
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

export async function historicalChart (id: string, period = '1y') {
  const response = await fetch(
    `${MAIN_URL}/coins/${id}/charts?period=${period}`
  );
  return response.json();
};
