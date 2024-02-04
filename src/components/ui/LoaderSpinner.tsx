import { BallTriangle } from 'react-loader-spinner';

export const LoaderSpinner = () => {
  return (
    <div className="flex justify-center py-5">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="rgb(234, 179, 8)"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
