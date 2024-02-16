type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <div className="text-center w-full sm:mx-auto sm:max-w-lg">{children}</div>
  );
};
