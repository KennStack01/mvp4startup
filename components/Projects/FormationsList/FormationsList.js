import React, { useEffect, useState } from "react";
import Link from "next/link";
import Formation from "./Formation";
import { BsArrowRightShort } from "react-icons/bs";

const FormationsList = () => {
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFormations = async () => {
    // let URL = "http://localhost:4000/home/index_formations";
    let URL = "http://localhost:3002/formations";

    try {
      const res = await fetch(URL);
      const formations = await res.json();
      setFormations(formations);
      setLoading(false);
      // console.log(formations);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFormations();
    // console.log("FormationsList", formations);
  }, []);

  // For Filtering Options
  const [isCurrent, setIsCurrent] = React.useState({
    isToutesCurrent: true,
    isGratuiitesCurrent: false,
    isPremiumCurrent: false,
  });
  const [searchTerm, setSearchTerm] = useState("");

  const getToutesValue = () => {
    const value = "Toutes";
    setSearchTerm(value);
  };
  const getGratuitesValue = () => {
    const value = "Gratuites";
    setSearchTerm(value);
  };
  const getPremiumValue = () => {
    const value = "Premium";
    setSearchTerm(value);
  };
  const currentCSSStyles = "text-white bg-dark-pink-400";
  const normalStyle =
    "p-1 rounded-sm mx-2 cursor-pointer my-auto transition-all duration-300 ease-linear";

  return (
    <div className="mt-8 md:mt-24 ">
      <h1 className="text-xl md:text-3xl text-center font-bold mt-8 mb-4 md:mb-2">
        Les Formations
      </h1>
      {/* Filter */}
      <div className="sticky top-0 grid grid-cols-2 place-content-center space-x-2 md:flex flex-row justify-center text-center font-semibold text-sm text-gray-800 my-3 md:my-5">
        <h5
          onClick={() => {
            getToutesValue();
            setIsCurrent({
              isToutesCurrent: true,
              isGratuiitesCurrent: false,
              isPremiumCurrent: false,
            });
          }}
          className={`${
            isCurrent.isToutesCurrent ? currentCSSStyles : ""
          } ${normalStyle}`}
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
          className={`${
            isCurrent.isGratuiitesCurrent ? currentCSSStyles : ""
          } ${normalStyle}`}
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
          className={`${
            isCurrent.isPremiumCurrent ? currentCSSStyles : ""
          } ${normalStyle}`}
        >
          Premium
        </h5>
        <div className="p-1 rounded mx-2 cursor-pointer my-auto">
          Par Technologie
        </div>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading ? (
          <h1 className="text-gray-700 text-center justify-self-center mx-auto text-xl font-bold">
            Loading...
          </h1>
        ) : (
          formations
            .filter((formation) => {
              if (searchTerm === "") {
                return formation;
              }

              if (searchTerm === "Toutes") {
                return formation.showAll;
              }
              if (searchTerm === "Gratuites") {
                return formation.isFree;
              }
              if (searchTerm === "Premium") {
                return !formation.isFree;
              }
            })
            .map((formation) => (
              <Formation
                key={formation.id}
                imageSrc={formation.imageSrc}
                title={formation.title}
                lessons={formation.lessons}
                duration={formation.duration}
                slug={formation.slug}
                isFree={formation.isFree}
                price={formation.price}
                showAll={formation.showAll}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default FormationsList;
