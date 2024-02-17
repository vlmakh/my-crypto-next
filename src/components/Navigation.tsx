'use client';

import Link from 'next/link';
import { navlinks } from '@/data/navlinks';
import { usePathname } from 'next/navigation';
import { useUserStore } from '@/configs/store';

export const Navigation = () => {
  const pathname = usePathname();
  const uid = useUserStore(state => state.uid);
  const signout = useUserStore(state => state.signout);
  const linkClass =
    'group text-md font-semibold rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30';
  const spanClass =
    'inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none group-hover:text-yellow-500';

  return (
    <div className="hidden sm:flex justify-center gap-2 w-full">
      {navlinks.map(link => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.id}
            href={link.href}
            className={`${linkClass} ${isActive ? 'text-yellow-500' : ''}`}
          >
            <p>
              {link.label}
              <span className={spanClass}>-&gt;</span>
            </p>
          </Link>
        );
      })}

      {uid && (
        <Link
          href="/watchlist"
          className={`${linkClass} ${
            pathname === '/watchlist' ? 'text-yellow-500' : ''
          }`}
        >
          <p>
            Watchlist
            <span className={spanClass}>-&gt;</span>
          </p>
        </Link>
      )}

      {uid ? (
        <Link href="#" className={`${linkClass} ml-auto`} onClick={() => signout()}>
          <p>
            Sign Out
            <span className={spanClass}>-&gt;</span>
          </p>
        </Link>
      ) : (
        <Link
          href="/signin"
          className={`${linkClass} ml-auto ${
            pathname === '/signin' ? 'text-yellow-500' : ''
          }`}
        >
          <p>
            SignIn
            <span className={spanClass}>-&gt;</span>
          </p>
        </Link>
      )}
    </div>
  );
};
