import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from './Navigation';
import { BurgerMenu } from './ui/BurgerMenu';

export const TheHeader = () => {
  return (
    <header className="flex items-center border-b-2 px-5">
      <Link href="/" className="group py-2">
        <Image
          src="/logo512.webp"
          alt="Logo"
          width={40}
          height={40}
          className="mr-5 transition-transform group-hover:scale-110"
          priority
        />
      </Link>
      
      <BurgerMenu />

      <Navigation />
    </header>
  );
};

