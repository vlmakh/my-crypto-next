// import { ReactNode } from "react";

export interface ICoin {
  id: string;
  icon: string;
  name: string;
  symbol: string;
  rank: number;
  price: number;
  priceChange1h: number;
  priceChange1d: number;
  priceChange1w: number;
  marketCap: number;
  volume: number;
  totalSupply: number;
  availableSupply: number;
  websiteUrl?: string;
}

export interface INavLink {
  id: string,
  label: string;
  href: string;
};