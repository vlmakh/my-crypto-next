import Link from "next/link";

export const Navigation = () => {
  return (
    <div className="flex gap-2 justify-center">
      <Link
        href="/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Home
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none group-hover:text-orange-500">
            -&gt;
          </span>
        </h2>
      </Link>

      <Link
        href="/coins"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Coins
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none group-hover:text-orange-500">
            -&gt;
          </span>
        </h2>
      </Link>

      <Link
        href="api/auth/signin"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          SignIn
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none group-hover:text-orange-500">
            -&gt;
          </span>
        </h2>
      </Link>
    </div>
  );
};
