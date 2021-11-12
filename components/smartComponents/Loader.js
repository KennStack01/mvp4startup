import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoadingComponent = () => {
  return (
    <div className="flex flex-row justify-between bg-gray-200 text-gray-600 focus:outline-none font-semibold p-2 rounded-sm">
      <h3 className="my-auto">En Cours </h3>
      <Loader
        type="ThreeDots"
        color="rgba(75, 85, 99, var(--tw-text-opacity))"
        height={25}
        width={25}
        className="mx-1 my-auto"
      />
    </div>
  );
};

export default LoadingComponent;
