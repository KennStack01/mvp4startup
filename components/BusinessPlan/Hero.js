import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "-!svg-react-loader!../../public/svg/businessPlan.svg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:my-2 mx-2 text-dark-pink-800 bg-back-pink-500 p-5 rounded-lg">
      <div className="my-auto md:w-1/2 flex flex-col">
        {" "}
        <h1 className="font-bold text-2xl md:text-4xl text-dark-pink-500 w-full md:mr-20">
          L’Afrique est le continent avec les plus grande perspective
          d’évolution.{" "}
        </h1>
        <h5 className="text-sm font-semibold md:font-medium my-4 text-justify">
          La population est jeune passionnée et talentueuse, tout est à
          construire. Vous trouverez ici des business plan clé en main qui vous
          permettra de contribuer à l’essor économique de ce continent. Vous
          aurez toutes les informations nécessaires pour l’implémentation de
          chacun des Business plan, de l’offre financière, du plan de dépense,
          des ressources humaines, des contacts des partenariats, à l’étude de
          terrain, vous disposez de tous pour investir sur ce continent.
        </h5>
      </div>
      <div className="my-auto md:w-1/2 hidden md:block">
        <HeroImage style={{ width: "90%", height: "inherit" }} />
      </div>
    </div>
  );
};

export default Hero;
