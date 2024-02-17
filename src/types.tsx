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

export interface ICoinFound {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
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

export interface IResetForm {
  resetForm: () => void;
}

export interface IUser {
  email: string;
  name: string;
  uid: string;
  accessToken?: string;
  isLoading?: boolean;
  phoneNumber?: string;
}

export interface IUserState {
  email: string;
  name: string;
  uid: string;
  accessToken: string;
  phoneNumber?: string;
  setUserbyPhone: (u: IUser) => void;
  signinGoogle: () => void;
  signinFacebook: () => void;
  signupEmail: (regData: ICredentials) => void;
  signinEmail: (regData: ICredentials) => void;
  signout: () => void;
}

export interface IWatchlistState {
  watchlist: string[];
  setWatchlistState: (x: string[]) => void;
  addCoinToWatchlistState: (x: string) => void;
  removeCoinToWatchlistState: (x: string) => void;
}

export interface INewsItem {
  id: string;
  searchKeyWords: string[];
  feedDate: number;
  source: string;
  title: string;
  sourceLink: string;
  isFeatured: boolean;
  imgUrl: string;
  reactionsCount: any;
  reactions: string[];
  relatedCoins: string[];
  content: boolean;
  link: string;
  bigImg: boolean;
  description: string;
}
