'use client';

import { useState } from 'react';
import { useUserStore } from '@/configs/store';
import Link from 'next/link';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { UserDropDownMenu } from './UserDropDownMenu';

export const UserMenuBtn = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const uid = useUserStore(state => state.uid);

  return (
    <div className="ml-2">
      {!uid ? (
        <div className="flex gap-4">
          <Link
            href="/signin"
            onClick={() => setShowDropDown(false)}
            className="rounded-lg bg-slate-400 px-8 py-2 text-base text-white transition-colors hover:text-yellow-500"
          >
            Signin
          </Link>

          <Link
            href="/signup"
            onClick={() => setShowDropDown(false)}
            className="rounded-lg bg-yellow-500 px-8 py-2 text-base transition-colors hover:bg-yellow-400"
          >
            Signup
          </Link>
        </div>
      ) : (
        <button
          className="group p-2"
          onClick={() => setShowDropDown(!showDropDown)}
          aria-label="User menu open"
          type="button"
        >
          <UserCircleIcon className="h-6 w-6 text-inherit transition-transform group-hover:scale-110" />
        </button>
      )}

      {showDropDown && (
        <UserDropDownMenu
          setShowDropDown={setShowDropDown}
          showDropDown={showDropDown}
        />
      )}
    </div>
  );
};
