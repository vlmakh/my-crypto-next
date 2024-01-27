'use client';

import { SigninGoogleBtn } from "@/components/ui/SigninGoogleBtn";
// import { SigninEmailForm } from "@/components/ui/SigninEmailForm";
import { redirect } from "next/navigation";
// import { getServerSession } from "next-auth";
// import { authConfig } from "@/configs/auth";
import { useUserStore } from "@/configs/store";

export default function SigninPage() {
  const uid = useUserStore((state) => state.uid);
  // const session = await getServerSession(authConfig);

  // console.log(session)

  {
    uid && redirect(`/watchlist`);
  }

  return (
    <div className="text-center pt-12">

      <SigninGoogleBtn />

      {/* <p className="mt-5">or</p> */}

      {/* <SigninEmailForm /> */}
    </div>
  );
}
