"use client";

import { useUserStore } from "@/configs/store";
import IconGoogle from '../../../public/icons/google.svg'

export const SigninGoogleBtn = () => {
  const signinGoogle = useUserStore((state) => state.signinGoogle);

  const handleSigninGoogle = () => {
    signinGoogle();
  };

  return (
    <button
      className="flex items-center justify-center gap-6 mt-12 py-2 w-full rounded-md bg-yellow-500 text-black text-xl font-bold hover:bg-yellow-300 transition-colors"
      onClick={handleSigninGoogle}
    >
      <IconGoogle />

      Sign in with Google
    </button>
  );
};
