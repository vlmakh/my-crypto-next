"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export const BtnSigninGoogle = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/watchlist";

  return (
    <button className="py-2 w-64 rounded-md bg-gray-50 text-black text-xl font-bold hover:bg-orange-400 transition-colors" onClick={() => signIn("google", { callbackUrl })}>
      Sign in with Google
    </button>
  );
};
