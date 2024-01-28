"use client";

import { SignupEmailForm } from "@/components/ui/SignupEmailForm";
import { redirect } from "next/navigation";
import { useUserStore } from "@/configs/store";
import { Container } from "@/components/Container";

export default function SignupPage() {
  const uid = useUserStore((state) => state.uid);

  {
    uid && redirect(`/watchlist`);
  }

  return (
    <Container>
      <SignupEmailForm />
    </Container>
  );
}
