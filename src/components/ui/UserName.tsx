'use client';

import { useUserStore } from '@/configs/store';

export const UserName = () => {
  const phoneNumber = useUserStore(state => state.phoneNumber);
  const email = useUserStore(state => state.email);

  return <h1 className="py-5 text-center">{email ? email : phoneNumber}</h1>;
};
