import { MainLogo } from './ui/MainLogo';
import { BurgerMenu } from './ui/BurgerMenu';
import { Navigation } from './ui/Navigation';

export const TheHeader = () => {
  return (
    <header className="flex items-center border-b-2 px-5">
      <MainLogo />
      
      <BurgerMenu />

      <Navigation />
    </header>
  );
};

