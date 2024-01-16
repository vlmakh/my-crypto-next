// import Image from "next/image";

export const TheFooter = () => {
  return (
    <footer className="flex gap-4 justify-center items-center">
      <p>2024</p>

      <div className="flex justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vlad-makhnenko.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By VM
        </a>
      </div>
    </footer>
  );
};
