'use client';

import { SigninGoogleBtn } from "@/components/ui/SigninGoogleBtn";
import { SigninEmailForm } from "@/components/ui/SigninEmailForm";
import { redirect } from "next/navigation";
import { useUserStore } from "@/configs/store";
import { Container } from "@/components/Container";

export default function SigninPage() {
  const uid = useUserStore((state) => state.uid);

  {
    uid && redirect(`/watchlist`);
  }

  return (
    <Container>

      <SigninGoogleBtn />

      <p className="mt-5">or</p>

      <SigninEmailForm />
    </Container>
  );
}
