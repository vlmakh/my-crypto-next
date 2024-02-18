'use client';

import { useState } from 'react';
import { useUserStore } from '@/configs/store';
import Link from 'next/link';
import {
  UserCircleIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/solid';
import { UserName } from './UserName';

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const uid = useUserStore(state => state.uid);
  const signout = useUserStore(state => state.signout);

  return (
    <div className="ml-auto">
      {!uid ? (
        <div className="flex gap-4">
          <Link
            href="/signin"
            onClick={() => setIsOpen(false)}
            className="rounded-lg bg-slate-400 px-8 py-2 text-base text-white"
          >
            Signin
          </Link>

          <Link
            href="/signup"
            onClick={() => setIsOpen(false)}
            className="rounded-lg bg-yellow-500 px-8 py-2 text-base"
          >
            Signup
          </Link>
        </div>
      ) : (
        <button
          className="p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu open"
          type="button"
        >
          <UserCircleIcon className="h-6 w-6 text-inherit" />
        </button>
      )}

      {isOpen && (
        <div className="absolute right-0 top-14 z-20 w-60 bg-white text-black dark:invert">
          <div className="grid border-2 text-xl font-bold">
            <UserName />

            <Link
              className="border-t-2 p-4"
              href="#"
              onClick={() => {
                signout();
                setIsOpen(false);
              }}
            >
              <ArrowRightStartOnRectangleIcon className="mr-2 inline h-6 w-6" />
              Signout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
