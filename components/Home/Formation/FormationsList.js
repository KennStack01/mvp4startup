import React, { useEffect, useState } from "react";
import Link from "next/link";
import Formation from "./Formation";
import { BsArrowRightShort } from "react-icons/bs";

const FormationsList = () => {
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFormations = async () => {
    let URL = "http://localhost:4000/home/index_formations";

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
      <h1 className="text-xl md:text-3xl font-bold mt-8 mb-4 md:mb-2">
        Formations Gratuites
      </h1>
      <div className="flex flex-col md:grid grid-cols-3">
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
            />
          ))
        )}
      </div>
      <Link href="/projects">
        <a className="flex flex-row justify-end text-md md:text-xl text-right font-bold my-8 hover:underline">
          <h5>En savoir plus</h5>
          <BsArrowRightShort className="my-auto text-xl" />
        </a>
      </Link>
    </div>
  );
};

export default FormationsList;
