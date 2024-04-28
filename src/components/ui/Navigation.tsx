'use client';

import Link from 'next/link';
import { navlinks } from '@/data/navlinks';
import { usePathname } from 'next/navigation';
import { UserCurrencyBtn } from './UserCurrencyBtn';
import { UserMenuBtn } from './UserMenuBtn';
import { useCurrencyStore } from '@/configs/store';

export const Navigation = () => {
  const pathname = usePathname();
  const linkClass =
    'group text-md font-semibold rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30';
  const spanClass =
    'inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none group-hover:text-yellow-500';

  const currency = useCurrencyStore(state => state.currency);

  return (
    <div className="hidden w-full md:flex md:items-center md:gap-2">
      <Link
        href={`/coins?currency=${currency.name}`}
            className={`${linkClass} ${pathname === '/coins' ? 'text-yellow-500' : ''}`}
          >
            <p>
              Coins
              <span className={spanClass}>-&gt;</span>
            </p>
          </Link>

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

      <UserCurrencyBtn />

      <UserMenuBtn />
    </div>
  );
};
