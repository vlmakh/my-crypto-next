type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <div className="w-full px-5 text-center sm:mx-auto sm:max-w-lg sm:px-0">
      {children}
    </div>
  );
};
