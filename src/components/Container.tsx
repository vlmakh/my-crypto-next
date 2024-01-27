type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">{children}</div>
  );
};
