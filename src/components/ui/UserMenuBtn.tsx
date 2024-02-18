'use client';

import { useState } from 'react';
import { useUserStore } from '@/configs/store';
import Link from 'next/link';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { UserDropDownMenu } from './UserDropDownMenu';

export const UserMenuBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const uid = useUserStore(state => state.uid);

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
          aria-label="User menu open"
          type="button"
        >
          <UserCircleIcon className="h-6 w-6 text-inherit" />
        </button>
      )}

      {isOpen && <UserDropDownMenu setIsOpen={setIsOpen} />}
    </div>
  );
};
