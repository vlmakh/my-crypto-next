import { create } from "zustand";
import type { IUserState } from "@/types";
import { devtools } from 'zustand/middleware'
import { operSigninGoogle, operSignOut } from "@/utils/loginOperations";

const initialUserState = {
  email: "",
  name: "",
  uid: "",
  accessToken: "",
  isLoading: false,
};

export const useUserStore = create<IUserState>()(devtools(set => ({
    ...initialUserState,
  
  signinGoogle() {
    set({ isLoading: true });

    operSigninGoogle()
      .then((data: any) => {
        localStorage.setItem('my-crypto-vm', JSON.stringify(data?.token));

        set({ email: data.user.email, name: data.user.displayName, uid: data.user.uid, });
      })
      .catch((error: any) => console.log(error))
      .finally(() => {
        set({ isLoading: false });
      });
  },

  signout() {
    // set({ isLoading: true });

    operSignOut()
      .then(() => {
        localStorage.removeItem('my-crypto-vm');
      })
      .catch(e => console.log(e))
      .finally(() => {
        set(initialUserState);
      });
  },
     
})));
