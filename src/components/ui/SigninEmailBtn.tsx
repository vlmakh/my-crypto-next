'use client';

import Link from 'next/link';
import { redirect } from 'next/navigation';
import Mail from '../../../public/icons/mail.svg';

export const SigninEmailBtn = () => {
  return (
    <Link
      className="mt-12 flex w-full items-center justify-center gap-6 rounded-md bg-yellow-500 py-2 text-xl font-bold text-black transition-colors hover:bg-yellow-300"
      href="/signin/email"
    >
      <Mail />
      Sign in with Email
    </Link>
  );
};
