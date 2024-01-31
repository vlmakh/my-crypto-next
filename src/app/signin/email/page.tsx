'use client';

import { SigninEmailForm } from '@/components/ui/SigninEmailForm';
import { useUserStore } from '@/configs/store';
import { redirect } from 'next/navigation';
import { Container } from '@/components/Container';

export default function SigninEmailPage() {
  const uid = useUserStore(state => state.uid);

  {
    uid && redirect(`/watchlist`);
  }

  return (
    <Container>
      <SigninEmailForm />
    </Container>
  );
}
