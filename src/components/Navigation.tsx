"use client";

import Link from "next/link";
import { navlinks } from "@/data/navlinks";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  const session = useSession();

  console.log(session);

  return (
    <div className="flex gap-2 justify-center">
      {navlinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.id}
            href={link.href}
            className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${
              isActive ? "text-yellow-500" : ""
            }`}
          >
            <p className="text-xl font-semibold">
              {link.label}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none group-hover:text-yellow-500">
                -&gt;
              </span>
            </p>
          </Link>
        );
      })}

      {session?.data && (
        <Link
          href="/watchlist"
          className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${
            pathname === "/watchlist" ? "text-yellow-500" : ""
          }`}
        >
          <p className="text-xl font-semibold">
            Watchlist
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none group-hover:text-yellow-500">
              -&gt;
            </span>
          </p>
        </Link>
      )}

      {session?.data ? (
        <Link
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          <p className="text-xl font-semibold">
            Sign Out
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none group-hover:text-yellow-500">
              -&gt;
            </span>
          </p>
        </Link>
      ) : (
        <Link
          href="/signin"
          className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${
            pathname === "/signin" ? "text-yellow-500" : ""
          }`}
        >
          <p className="text-xl font-semibold">
            SignIn
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none group-hover:text-yellow-500">
              -&gt;
            </span>
          </p>
        </Link>
      )}
    </div>
  );
};
