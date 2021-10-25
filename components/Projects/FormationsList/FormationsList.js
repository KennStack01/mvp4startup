import React, { useEffect, useState } from "react";
import Link from "next/link";
import Formation from "./Formation";
import { BsArrowRightShort } from "react-icons/bs";
import FilterBar from "./FilterBar";

const FormationsList = () => {
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(true);

  const [termToutes, setTermToutes] = useState("");
  const [termGratuites, setTermGratuites] = useState("");
  const [termPremium, setTermPremium] = useState("");

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

  return (
    <div className="mt-8 md:mt-24 ">
      <h1 className="text-xl md:text-3xl text-center font-bold mt-8 mb-4 md:mb-2">
        Les Formations
      </h1>
      {/* Filter */}
      <FilterBar />
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading ? (
          <h1 className="text-gray-700 text-center justify-self-center mx-auto text-xl font-bold">
            Loading...
          </h1>
        ) : (
          formations.map((formation) => (
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
