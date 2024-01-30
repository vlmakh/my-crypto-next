"use client";

import { useUserStore } from "@/configs/store";
import IconFacebook from '../../../public/icons/facebook.svg'

export const SigninFacebookBtn = () => {
  const signinFacebook = useUserStore((state) => state.signinFacebook);

  const handleSigninFacebook = () => {
    signinFacebook();
  };

  return (
    <button
      className="flex items-center justify-center gap-6 mt-12 py-2 w-full rounded-md bg-yellow-500 text-black text-xl font-bold hover:bg-yellow-300 transition-colors"
      onClick={handleSigninFacebook}
    >
      <IconFacebook />

      Sign in with Facebook
    </button>
  );
};
