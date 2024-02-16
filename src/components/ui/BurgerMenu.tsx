'use client';

import { useState } from 'react';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-auto">
      <button className="sm:hidden" onClick={() => setIsOpen(true)}>
        Menu
      </button>

      {isOpen && (
        <div className="absolute z-20 left-0 top-0 w-screen h-screen bg-inherit p-5">
          <button onClick={() => setIsOpen(false)}>Close</button>

          <ul>
            <li>News</li>
            <li>Coins</li>
            <li>Signout</li>
          </ul>
        </div>
      )}
    </div>
  );
};
