"use client";

import { useUserStore } from "@/configs/store";
import { useRouter } from "next/navigation";

export const SigninGoogleBtn = () => {
  const signinGoogle = useUserStore((state) => state.signinGoogle);
  const router = useRouter();

  const handleSigninGoogle = () => {
    signinGoogle();
  };

  return (
    <button
      className="py-2 w-64 rounded-md bg-gray-50 text-black text-xl font-bold hover:bg-yellow-500 transition-colors"
      onClick={handleSigninGoogle}
    >
      Sign in with Google
    </button>
  );
};
