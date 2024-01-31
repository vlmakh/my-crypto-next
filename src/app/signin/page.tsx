'use client';

import { SigninGoogleBtn } from '@/components/ui/SigninGoogleBtn';
import { SigninFacebookBtn } from '@/components/ui/SigninFacebookBtn';
import { SigninEmailBtn } from '@/components/ui/SigninEmailBtn';
import { redirect } from 'next/navigation';
import { useUserStore } from '@/configs/store';
import { Container } from '@/components/Container';

export default function SigninPage() {
  const uid = useUserStore(state => state.uid);

  {
    uid && redirect(`/watchlist`);
  }

  return (
    <Container>
      <SigninGoogleBtn />

      <SigninFacebookBtn />

      <SigninEmailBtn />
    </Container>
  );
}
