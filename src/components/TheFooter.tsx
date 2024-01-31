import LogoVM from "../../public/vm_logo.svg";

export const TheFooter = () => {
  return (
    <footer className="flex gap-4 justify-center items-center py-2">
      <p>2024</p>
      <span>By</span>
      <a
        className="pointer-events-none lg:pointer-events-auto lg:p-0 transition-colors hover:text-yellow-500 dark:invert-0"
        href="https://vlad-makhnenko.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >        
        <LogoVM />
      </a>
    </footer>
  );
};
