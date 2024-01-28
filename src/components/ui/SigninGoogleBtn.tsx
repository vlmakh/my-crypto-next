"use client";

import { useUserStore } from "@/configs/store";

export const SigninGoogleBtn = () => {
  const signinGoogle = useUserStore((state) => state.signinGoogle);

  const handleSigninGoogle = () => {
    signinGoogle();
  };

  return (
    <button
      className="mt-12 py-2 w-64 rounded-md bg-gray-50 text-black text-xl font-bold hover:bg-yellow-500 transition-colors"
      onClick={handleSigninGoogle}
    >
      Sign in with Google
    </button>
  );
};
