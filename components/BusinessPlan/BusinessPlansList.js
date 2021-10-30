import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import BusinessPlan from "./BusinessPlan";

const BusinessPlansList = ({ businessPlans }) => {
  // const [businessPlans, setBusinessPlans] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const fetchBusinessPlans = async () => {
  //   // let URL = "http://localhost:4000/home/index_bsp";
  //   let URL = "http://localhost:3002/businessPlans";

  //   try {
  //     const res = await fetch(URL);
  //     const businessPlans = await res.json();
  //     setBusinessPlans(businessPlans);
  //     setLoading(false);
  //     // console.log(businessPlans);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchBusinessPlans();
  //   // console.log("BusinessPlansList", businessPlans);
  // }, []);

  // For Filtering Options
  const [isCurrent, setIsCurrent] = React.useState({
    isTousCurrent: true,
    isITCurrent: false,
    isAgroCurrent: false,
    isElevageCurrent: false,
    isIndustrielleCurrent: false,
  });
  const [searchTerm, setSearchTerm] = useState("");

  const getTousValue = () => {
    const value = "Tous";
    setSearchTerm(value);
  };
  const getITValue = () => {
    const value = "IT";
    setSearchTerm(value);
  };
  const getAgroValue = () => {
    const value = "Agro";
    setSearchTerm(value);
  };
  const getElevageValue = () => {
    const value = "Elevage";
    setSearchTerm(value);
  };
  const getIndustrielleValue = () => {
    const value = "Industrielle";
    setSearchTerm(value);
  };

  const currentCSSStyles = "text-white bg-dark-pink-400";
  const normalStyle =
    "p-1 rounded-sm mx-2 cursor-pointer my-auto transition-all duration-300 ease-linear";

  return (
    <div className="mt-8 md:mt-14">
      <h1 className="text-xl md:text-3xl text-center font-bold mt-8 mb-4 md:mb-2">
        Les Business Plans
      </h1>

      {/* Filter */}
      <div className="sticky top-0 grid grid-cols-2 place-content-center space-x-2 md:flex flex-row justify-center text-center font-semibold text-sm text-gray-800 my-3 md:my-5">
        <h5
          onClick={() => {
            getTousValue();
            setIsCurrent({
              isTousCurrent: true,
              isITCurrent: false,
              isAgroCurrent: false,
              isElevageCurrent: false,
              isIndustrielleCurrent: false,
            });
          }}
          className={`${
            isCurrent.isTousCurrent ? currentCSSStyles : ""
          } ${normalStyle}`}
        >
          Tous
        </h5>
        <h5
          onClick={() => {
            getITValue();
            setIsCurrent({
              isTousCurrent: false,
              isITCurrent: true,
              isAgroCurrent: false,
              isElevageCurrent: false,
              isIndustrielleCurrent: false,
            });
          }}
          className={`${
            isCurrent.isITCurrent ? currentCSSStyles : ""
          } ${normalStyle}`}
        >
          IT
        </h5>
        <h5
          onClick={() => {
            getAgroValue();
            setIsCurrent({
              isTousCurrent: false,
              isITCurrent: false,
              isAgroCurrent: true,
              isElevageCurrent: false,
              isIndustrielleCurrent: false,
            });
          }}
          className={`${
            isCurrent.isAgroCurrent ? currentCSSStyles : ""
          } ${normalStyle}`}
        >
          Agriculture
        </h5>
        <h5
          onClick={() => {
            getElevageValue();
            setIsCurrent({
              isTousCurrent: false,
              isITCurrent: false,
              isAgroCurrent: false,
              isElevageCurrent: true,
              isIndustrielleCurrent: false,
            });
          }}
          className={`${
            isCurrent.isElevageCurrent ? currentCSSStyles : ""
          } ${normalStyle}`}
        >
          Elevage
        </h5>
        <h5
          onClick={() => {
            getIndustrielleValue();
            setIsCurrent({
              isTousCurrent: false,
              isITCurrent: false,
              isAgroCurrent: false,
              isElevageCurrent: false,
              isIndustrielleCurrent: true,
            });
          }}
          className={`${
            isCurrent.isIndustrielleCurrent ? currentCSSStyles : ""
          } ${normalStyle}`}
        >
          Industrielle
        </h5>
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {businessPlans
          .filter((busiessPlan) => {
            if (searchTerm === "") {
              return busiessPlan;
            }
            if (searchTerm === "Tous") {
              return busiessPlan;
            }
            if (searchTerm === "IT") {
              return busiessPlan.category === "IT";
            }
            if (searchTerm === "Agro") {
              return busiessPlan.category === "Agriculture";
            }
            if (searchTerm === "Elevage") {
              return busiessPlan.category === "Elevage";
            }
            if (searchTerm === "Industrielle") {
              return busiessPlan.category === "Industrielle";
            }
          })
          .map((businessPlan) => (
            <BusinessPlan
              key={businessPlan.id}
              id={businessPlan.id}
              imageSrc={businessPlan.imageSrc}
              title={businessPlan.title}
              details={businessPlan.details}
              price={businessPlan.price}
              slug={businessPlan.slug}
            />
          ))}
      </div>
    </div>
  );
};

export default BusinessPlansList;
