import Link from "next/link";
import Image from 'next/image';
import { Navigation } from "./Navigation";

export const TheHeader = () => {
  return (
    <header className="border-b-2 flex items-center px-5">

      <Link href="/"><Image
        src="/logo512.webp"
        alt=""
        width={40}
        height={40}
        className="mr-5"
        priority
      /></Link>

      <Navigation />
    </header>
  );
};
