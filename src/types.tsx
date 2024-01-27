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
  id: string;
  label: string;
  href: string;
}

export interface ICredentials {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  name: string;
  uid: string;
  accessToken?: string;
  isLoading?: boolean;
}

export interface IUserState {
  email: string;
  name: string;
  uid: string;
  accessToken: string,
  watchlist: string[],
  signinGoogle: () => void;
  // loginUser: (regData: ICredentials, resetForm: () => void) => void;
  // checkUser: () => void;
  // updateName: (values: { name: string }, resetForm: () => void) => void;
  // updatePass: (values: { password: string }, resetForm: () => void) => void;
  signout: () => void;
  updateWatchListState: (x: string[]) => void; 
}