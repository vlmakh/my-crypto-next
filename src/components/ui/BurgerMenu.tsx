'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useUserStore } from '@/configs/store';
import {
  Bars4Icon,
  XMarkIcon,
  ListBulletIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/solid';
import { UserName } from './UserName';
import { navlinks } from '@/data/navlinks';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const uid = useUserStore(state => state.uid);
  const signout = useUserStore(state => state.signout);

  return (
    <div className="ml-auto">
      <button
        className="p-2 md:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="Menu open"
        type="button"
      >
        <Bars4Icon className="h-6 w-6 text-black dark:invert" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-0 z-20 h-screen w-screen bg-white p-10 text-black dark:invert">
          <button
            onClick={() => setIsOpen(false)}
            className="ml-auto block bg-transparent p-2"
            aria-label="Close menu"
            type="button"
          >
            <XMarkIcon className="h-6 w-6 text-inherit" />
          </button>

          <UserName />

          <nav className="grid gap-5 text-xl font-bold">
            {!uid && (
              <div className="flex justify-between gap-4">
                <Link
                  href="/signin"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full justify-center rounded-lg bg-slate-400 py-2 text-base text-white"
                >
                  Signin
                </Link>

                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full justify-center rounded-lg bg-yellow-500 py-2 text-base"
                >
                  Signup
                </Link>
              </div>
            )}

            <>
              {navlinks.map(item => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="mr-2 inline h-6 w-6" />
                    {item.label}
                  </Link>
                );
              })}
            </>

            {uid && (
              <>
                <Link href="/watchlist" onClick={() => setIsOpen(false)}>
                  <ListBulletIcon className="mr-2 inline h-6 w-6" />
                  Watchlist
                </Link>

                <Link
                  href="#"
                  onClick={() => {
                    signout();
                    setIsOpen(false);
                  }}
                >
                  <ArrowRightStartOnRectangleIcon className="mr-2 inline h-6 w-6" />{' '}
                  Signout
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </div>
  );
};
