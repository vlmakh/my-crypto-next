'use client';

import { useUserStore } from '@/configs/store';

export const UserName = () => {
  const phoneNumber = useUserStore(state => state.phoneNumber);
  const email = useUserStore(state => state.email);

  return <h2 className="p-4 text-center">{email ? email : phoneNumber}</h2>;
};
