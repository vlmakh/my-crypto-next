import { create } from "zustand";
import type { IUser } from "@/types";

const initialUserState = {
  email: "",
  name: "",
  uid: "",
  accessToken: "",
  isLoading: false,
};

export const useUserStore = create<IUser>()(set => ({
    ...initialUserState,
    
     
}));
