import { create } from "zustand";
import type { IUserState } from "@/types";
import { devtools } from "zustand/middleware";
import { operSigninGoogle, operSignOut } from "@/utils/loginOperations";

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

    updateWatchListState(list) {
      set({ watchlist: list });
    },
  }))
);
