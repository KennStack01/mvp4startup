import React from "react";
import Formation from "./Formation";
import imgSrc from "../../../public/formation.jpg";

const FormationsList = () => {
  return (
    <div className="mt-8 md:mt-14">
      <h1 className="text-xl md:text-3xl font-bold my-8">
        Formations Gratuites
      </h1>
      <div className="flex flex-col md:grid grid-cols-3">
        <Formation
          // imageSrc="/../../../public/formation.jpg"
          imageSrc={imgSrc}
          title="Learn React JS for Absolute Beginners"
          lessons="14"
          duration="15h 30min"
          slug="/projects"
        />
        <Formation
          // imageSrc="/../../../public/formation.jpg"
          imageSrc={imgSrc}
          title="Learn React JS for Absolute Beginners"
          lessons="14"
          duration="15h 30min"
          slug="/projects"
        />
        <Formation
          // imageSrc="/../../../public/formation.jpg"
          imageSrc={imgSrc}
          title="Learn React JS for Absolute Beginners"
          lessons="14"
          duration="15h 30min"
          slug="/projects"
        />
        <Formation
          // imageSrc="/../../../public/formation.jpg"
          imageSrc={imgSrc}
          title="Learn React JS for Absolute Beginners"
          lessons="14"
          duration="15h 30min"
          slug="/projects"
        />
        <Formation
          // imageSrc="/../../../public/formation.jpg"
          imageSrc={imgSrc}
          title="Learn React JS for Absolute Beginners"
          lessons="14"
          duration="15h 30min"
          slug="/projects"
        />
      </div>
    </div>
  );
};

export default FormationsList;
