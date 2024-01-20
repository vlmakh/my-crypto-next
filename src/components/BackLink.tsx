"use client";

import { useRouter } from "next/navigation";

export const BackLink = () => {
  const router = useRouter();

  return (
    <button onClick={router.back} className="group px-5 py-4 transition-colors text-xl font-semibold">
      <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none group-hover:text-orange-500">
        &lt;-
      </span>
    </button>
  );
};
