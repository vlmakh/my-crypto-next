'use client';

import Link from 'next/link';
import {
  ListBulletIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/solid';
import { UserName } from './UserName';
import { useUserStore } from '@/configs/store';
import { useEffect } from 'react';

type Props = {
  setShowDropDown: any;
};

export const UserDropDownMenu = ({ setShowDropDown }: Props) => {
  const signout = useUserStore(state => state.signout);

  const handleEscape = (event: KeyboardEvent) => {
    if (event.code === 'Escape') {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  return (
    <div className="absolute right-0 top-14 z-20 w-60 bg-white dark:bg-black">
      <div className="grid border-2">
        <UserName />

        <Link
          className="border-t-2 p-4 font-bold transition-colors hover:text-yellow-500"
          href="/watchlist"
          onClick={() => {
            setShowDropDown(false);
          }}
        >
          <ListBulletIcon className="mr-2 inline h-6 w-6" />
          Watchlist
        </Link>

        <Link
          className="border-t-2 p-4 font-bold transition-colors hover:text-yellow-500"
          href="#"
          onClick={() => {
            signout();
            setShowDropDown(false);
          }}
        >
          <ArrowRightStartOnRectangleIcon className="mr-2 inline h-6 w-6" />
          Signout
        </Link>
      </div>
    </div>
  );
};
