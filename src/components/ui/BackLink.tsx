'use client';

import { useRouter } from 'next/navigation';

export const BackLink = () => {
  const router = useRouter();

  return (
    <button
      onClick={router.back}
      className="group px-5 py-3 text-xl font-semibold transition-colors"
    >
      <span className="inline-block transition-all group-hover:-translate-x-1 group-hover:text-yellow-500 motion-reduce:transform-none">
        &lt;-
      </span>
    </button>
  );
};
