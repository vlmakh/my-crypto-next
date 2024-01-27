"use client";

import Link from "next/link";
import { navlinks } from "@/data/navlinks";
// import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useUserStore } from "@/configs/store";

export const Navigation = () => {
  const pathname = usePathname();
  // const session = useSession();
  const uid = useUserStore((state) => state.uid);
  const signout = useUserStore((state) => state.signout);
  const linkClass =
    "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30";
  const spanClass =
    "inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none group-hover:text-yellow-500";

  // console.log(session);

  return (
    <div className="flex gap-2 justify-center">
      {navlinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.id}
            href={link.href}
            className={`${linkClass} ${isActive ? "text-yellow-500" : ""}`}
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

      {uid && (
        <Link
          href="/watchlist"
          className={`${linkClass} ${
            pathname === "/watchlist" ? "text-yellow-500" : ""
          }`}
        >
          <p className="text-xl font-semibold">
            Watchlist
            <span className={spanClass}>-&gt;</span>
          </p>
        </Link>
      )}

      {uid ? (
        <Link
          href="#"
          className={linkClass}
          // onClick={() => signOut({ callbackUrl: "/" })}
          onClick={() => signout()}
        >
          <p className="text-xl font-semibold">
            Sign Out
            <span className={spanClass}>-&gt;</span>
          </p>
        </Link>
      ) : (
        <Link
          href="/signin"
          className={`${linkClass} ${
            pathname === "/signin" ? "text-yellow-500" : ""
          }`}
        >
          <p className="text-xl font-semibold">
            SignIn
            <span className={spanClass}>-&gt;</span>
          </p>
        </Link>
      )}
    </div>
  );
};
