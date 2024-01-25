"use client";

// import { signIn } from "next-auth/react";
// import { useSearchParams } from "next/navigation";
import { useUserStore } from "@/configs/store";
import { useRouter } from "next/navigation";

export const SigninGoogleBtn = () => {
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl") || "/watchlist";
  const signinGoogle = useUserStore((state) => state.signinGoogle);
  const router = useRouter();

  const handleSigninGoogle = () => {
    signinGoogle();
    router.push("/watchlist");
  };

  return (
    <button
      className="py-2 w-64 rounded-md bg-gray-50 text-black text-xl font-bold hover:bg-yellow-500 transition-colors"
      // onClick={() => signIn("google", { callbackUrl })}
      onClick={handleSigninGoogle}
    >
      Sign in with Google
    </button>
  );
};
