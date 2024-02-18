'use client';

import Link from 'next/link';
import {
  ListBulletIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/solid';
import { UserName } from './UserName';
import { useUserStore } from '@/configs/store';
import { useEffect, useRef } from 'react';

type Props = {
  showDropDown: boolean;
  setShowDropDown: any;
};

export const UserDropDownMenu = ({ showDropDown, setShowDropDown }: Props) => {
  const signout = useUserStore(state => state.signout);
  const dropdown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        setShowDropDown(false);
      }
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  useEffect(() => {
    if (!showDropDown) return;

    const handleMouseClick = (event: MouseEvent) => {
      if (!dropdown.current?.contains(event.target as Node)) {
        setShowDropDown(false);
      }
    }
    document.addEventListener('click', handleMouseClick);

    return () => document.removeEventListener('click', handleMouseClick);
  }, [showDropDown]);

  return (
    <div
      className="absolute right-0 top-14 z-20 w-60 bg-white dark:bg-black"
      ref={dropdown}
    >
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
