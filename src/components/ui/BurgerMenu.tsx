'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useUserStore } from '@/configs/store';
import { Bars4Icon, XMarkIcon, NewspaperIcon, CircleStackIcon, ListBulletIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const uid = useUserStore(state => state.uid);
  const signout = useUserStore(state => state.signout);

  return (
    <div className="ml-auto">
      <button
        className="p-2 sm:hidden"
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

          <nav className="mt-5 grid gap-4 font-bold text-xl">
            <Link href="/news" onClick={() => setIsOpen(false)}>
              <NewspaperIcon className="h-6 w-6 inline mr-2"/>News
            </Link>

            <Link href="/coins" onClick={() => setIsOpen(false)}>
              <CircleStackIcon className="h-6 w-6 inline mr-2"/>Coins
            </Link>

            {uid && <Link href="/watchlist" onClick={() => setIsOpen(false)}>
              <ListBulletIcon className="h-6 w-6 inline mr-2"/>Watchlist
            </Link>}

            {uid ? (
              <Link
                href="#"
                onClick={() => {
                  signout();
                  setIsOpen(false);
                }}
              >
                <ArrowRightStartOnRectangleIcon className="h-6 w-6 inline mr-2"/> Signout
              </Link>
            ) : (
              <Link href="/signin" onClick={() => setIsOpen(false)}>
                Signin
              </Link>
            )}
          </nav>
        </div>
      )}
    </div>
  );
};
