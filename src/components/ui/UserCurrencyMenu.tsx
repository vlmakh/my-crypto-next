import React from 'react'
import { useRef, useEffect } from 'react';

type Props = {
  showDropDown: boolean;
  setShowDropDown: any;
};

export const UserCurrencyMenu = ({ showDropDown, setShowDropDown }: Props) => {
  const dropdown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        setShowDropDown(false);
      }
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  useEffect(() => {
    if (!showDropDown) return;

    const handleMouseClick = (event: MouseEvent) => {
      if (!dropdown.current?.contains(event.target as Node)) {
        setShowDropDown(false);
      }
    }
    document.addEventListener('click', handleMouseClick);

    return () => document.removeEventListener('click', handleMouseClick);
  }, [showDropDown]);


  return (
    <div className="absolute right-1/2 top-1/2 z-20 bg-white dark:bg-black"
      ref={dropdown}>UserCurrencyMenu</div>
  )
}
