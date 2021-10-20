import React from "react";

const MVP4StartupText = () => {
  return (
    <div className="flex flex-col md:flex-row my-14 md:my-20 mx-2 md:mx-5 text-dark-pink-800 bg-back-pink-500 p-5 rounded-lg">
      <div className="my-8 md:my-auto mx-auto md:w-1/2">
        <div className="flex flex-row text-3xl md:text-6xl font-bold">
          {/* Logo */}
          <h4 className="text-white text-center bg-light-pink-500 rounded-full h-20 w-20 md:h-36 md:w-36 pt-6 md:pt-10">
            MVP
          </h4>
          <h4 className="mt-6 md:mt-10">4STARTUP</h4>
        </div>
      </div>
      <div className="my-auto md:w-1/2 flex flex-col">
        <h5 className="italic text-sm md:text-md">
          Vous apprendre par la pratique la conception de Minimum Viable Product
          de startup en pratiquant et appliquant le Learn By doing. Après chaque
          formation vous serez à mesure d’utiliser le résultat pour l’adapter à
          votre marché et lancer la future licorne des startups. Nos Business
          plan vous donne un aperçu global et fin de tous les aspects financiers
          techniques et toutes les ressources nécessaires avec des cas réelle
          afin qu’ils soient un guide efficace pour l’implémentation directe sur
          le marché
        </h5>
      </div>
    </div>
  );
};

export default MVP4StartupText;
