import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { IUserState, IWatchlistState, ICredentials } from "@/types";
import {
  operSigninGoogle,
  operSignupEmail,
  operSignOut,
} from "@/utils/loginOperations";

const initialUserState = {
  email: "",
  name: "",
  uid: "",
  accessToken: "",
  watchlist: [],
};

export const useUserStore = create<IUserState>()(
  devtools((set) => ({
    ...initialUserState,

    signinGoogle() {
      operSigninGoogle()
        .then((data: any) => {
          localStorage.setItem("my-crypto-vm", JSON.stringify(data?.token));

          set({
            email: data.user.email,
            name: data.user.displayName,
            uid: data.user.uid,
          });
        })
        .catch((error: any) => console.log(error));
    },

    signupEmail(regData: ICredentials) {
      operSignupEmail(regData)
        .then((data: any) => {
          localStorage.setItem("my-crypto-vm", JSON.stringify(data?.token));

          set({
            email: data.user.email,
            name: "",
            uid: data.user.uid,
          });
        })
        .catch((e) => console.log(e));
    },

    signout() {
      operSignOut()
        .then(() => {
          localStorage.removeItem("my-crypto-vm");
        })
        .catch((e) => console.log(e))
        .finally(() => {
          set(initialUserState);
        });
    },
  }))
);

export const useWatchListStore = create<IWatchlistState>()((set, get) => ({
  watchlist: [],

  setWatchlistState(list) {
    set({ watchlist: list });
  },

  addCoinToWatchlistState(coinId) {
    const watchlist = [...get().watchlist, coinId];
    set({ watchlist });
  },

  removeCoinToWatchlistState(coinId) {
    const watchlist = get().watchlist.filter((id) => id !== coinId);
    set({ watchlist });
  },
}));
