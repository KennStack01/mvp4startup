import React, { useRef, useEffect } from "react";

const FilterBar = () => {
  const [isCurrent, setIsCurrent] = React.useState({
    isToutesCurrent: true,
    isGratuiitesCurrent: false,
    isPremiumCurrent: false,
  });

  const currentCSSStyles = "text-white bg-dark-pink-400";

  const toutesRef = useRef();
  const gratuitesRef = useRef();
  const premiumRef = useRef();

  const getToutesValue = () => {
    const toutesValue = toutesRef.current.textContent;
    console.log(toutesValue);
  };
  const getGratuitesValue = () => {
    const gratuitesValue = gratuitesRef.current.textContent;
    console.log(gratuitesValue);
  };
  const getPremiumValue = () => {
    const premiumValue = premiumRef.current.textContent;
    console.log(premiumValue);
  };

  return (
    <div className="sticky top-0 grid grid-cols-2 place-content-center space-x-2 space-y-2 md:flex flex-row justify-center text-center font-semibold text-sm text-gray-800 my-3 md:my-5">
      <h5
        onClick={() => {
          getToutesValue();
          setIsCurrent({
            isToutesCurrent: true,
            isGratuiitesCurrent: false,
            isPremiumCurrent: false,
          });
        }}
        ref={toutesRef}
        className={`${
          isCurrent.isToutesCurrent ? currentCSSStyles : ""
        } p-1 rounded-sm mx-2 cursor-pointer my-auto`}
      >
        Toutes
      </h5>
      <h5
        onClick={() => {
          getGratuitesValue();
          setIsCurrent({
            isToutesCurrent: false,
            isGratuiitesCurrent: true,
            isPremiumCurrent: false,
          });
        }}
        ref={gratuitesRef}
        className={`${
          isCurrent.isGratuiitesCurrent ? currentCSSStyles : ""
        } p-1 rounded mx-2 cursor-pointer my-auto`}
      >
        Gratuites
      </h5>
      <h5
        onClick={() => {
          getPremiumValue();
          setIsCurrent({
            isToutesCurrent: false,
            isGratuiitesCurrent: false,
            isPremiumCurrent: true,
          });
        }}
        ref={premiumRef}
        className={`${
          isCurrent.isPremiumCurrent ? currentCSSStyles : ""
        } p-1 rounded mx-2 cursor-pointer my-auto`}
      >
        Premium
      </h5>
      <div
        // onClick={manageCurrent}
        className="p-1 rounded mx-2 cursor-pointer my-auto"
      >
        Par Technologie
      </div>
    </div>
  );
};

export default FilterBar;
