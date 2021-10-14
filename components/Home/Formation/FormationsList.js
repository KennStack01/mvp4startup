import React, { useEffect, useState } from "react";
import Formation from "./Formation";
import imgSrc from "../../../public/formation.jpg";

const FormationsList = () => {
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFormations = async () => {
    let URL = "http://localhost:3002/formations";

    try {
      const res = await fetch(URL);
      const formations = await res.json();
      setFormations(formations);
      setLoading(false);
      console.log(formations);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFormations();
    console.log("FormationsList", formations);
  }, []);

  return (
    <div className="mt-8 md:mt-14">
      <h1 className="text-xl md:text-3xl font-bold my-8">
        Formations Gratuites
      </h1>
      <div className="flex flex-col md:grid grid-cols-3">
        {loading ? (
          <h1 className="text-gray-700 text-center mx-auto text-xl font-bold">
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
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FormationsList;
