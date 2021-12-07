import React, { useEffect, useState } from "react";
import Link from "next/link";
import Formation from "./Formation";
import { TAGS } from "../searchedTags";

const FormationsList = ({ formations }) => {
  // const [formations, setFormations] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const fetchFormations = async () => {
  //   // let URL = "http://localhost:4000/home/index_formations";
  //   let URL = "http://localhost:3002/formations";

  //   try {
  //     const res = await fetch(URL);
  //     const formations = await res.json();
  //     setFormations(formations);
  //     setLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchFormations();
  //   // console.log("FormationsList", formations);
  // }, []);

  // For Filtering Options
  const [isCurrent, setIsCurrent] = React.useState({
    isToutesCurrent: true,
    isGratuiitesCurrent: false,
    isPremiumCurrent: false,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [tag, setTag] = useState("All");

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

  const getTechnologiesValue = () => {
    const value = "All";
    setTag(value);
  };

  const currentCSSStyles = "text-white bg-dark-pink-400";
  const normalStyle =
    "p-1 rounded-sm mx-2 cursor-pointer my-auto transition-all duration-300 ease-linear";

  return (
    <div className="mt-8 ">
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
        <div className="flex flex-row col-span-2 place-self-center p-1 rounded mx-2 cursor-pointer my-auto">
          <h5 onClick={() => getTechnologiesValue()} className="my-auto">
            Technologie:
          </h5>
          <div className=" mx-2 ">
            <label className="block text-sm">
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="block bg-white border border-black-400 hover:border-gray-700 px-2 py-1 rounded focus:shadow leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
              >
                <option className="cursor-pointer text-grey-100 text-italic">
                  All
                </option>
                {TAGS.map((tag) => (
                  <option className="cursor-pointer"> {tag} </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {formations
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
          .filter((formation) => {
            if (tag === "All") {
              return formation;
            }
            if (
              formation.technologies
                .toLowerCase()
                .trim()
                .includes(tag.toLowerCase().trim())
            ) {
              return formation;
            }
          })
          .map((formation) => (
            <Formation
              key={formation.slug}
              id={formation.id}
              imageSrc={formation.imageSrc}
              title={formation.title}
              lessons={formation.lessons}
              duration={formation.duration}
              slug={formation.slug}
              isFree={formation.isFree}
              price={formation.price}
              showAll={formation.showAll}
              technologies={formation.technologies}
            />
          ))}
      </div>
    </div>
  );
};

export default FormationsList;
