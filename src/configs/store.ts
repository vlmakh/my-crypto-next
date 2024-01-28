import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { IUserState, IWatchlistState, ICredentials } from "@/types";
import {
  operSigninGoogle,
  operSignupEmail, operSigninEmail,
  operSignOut,
} from "@/utils/loginOperations";

const initialUserState = {
  email: "",
  name: "",
  uid: "",
  accessToken: "",
};

export const useUserStore = create<IUserState>()(
  devtools(
    persist(
      (set) => ({
        ...initialUserState,

        signinGoogle: () => {
          operSigninGoogle()
            .then((data: any) => {
              set({
                email: data.user.email,
                name: data.user.displayName,
                uid: data.user.uid,
                accessToken: data.token,
              });
            })
            .catch((error: any) => console.log(error));
        },

        signupEmail: (regData: ICredentials) => {
          operSignupEmail(regData)
            .then((data: any) => {
              set({
                email: data.email,
                uid: data.uid,
                accessToken: data.accessToken,
              });
            })
            .catch((e) => console.log(e));
        },

        signinEmail: (regData: ICredentials) => {
          operSigninEmail(regData)
            .then((data: any) => {
              set({
                email: data.email,
                uid: data.uid,
                accessToken: data.accessToken,
              });
            })
            .catch((e) => console.log(e));
        },

        signout: () => {
          operSignOut()
            .then(() => {
              // localStorage.removeItem("mycrypto-token");
            })
            .catch((e) => console.log(e))
            .finally(() => {
              set(initialUserState);
            });
        },
      }),
      { name: "mycrypto" }
    )
  )
);

export const useWatchListStore = create<IWatchlistState>()((set, get) => ({
  watchlist: [],

  setWatchlistState: (list) => {
    set({ watchlist: list });
  },

  addCoinToWatchlistState: (coinId) => {
    const watchlist = [...get().watchlist, coinId];
    set({ watchlist });
  },

  removeCoinToWatchlistState: (coinId) => {
    const watchlist = get().watchlist.filter((id) => id !== coinId);
    set({ watchlist });
  },
}));
