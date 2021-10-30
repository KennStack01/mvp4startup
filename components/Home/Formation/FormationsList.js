import React, { useEffect, useState } from "react";
import Link from "next/link";
import Formation from "./Formation";
import { BsArrowRightShort } from "react-icons/bs";

const FormationsList = ({ formations }) => {
  return (
    <div className="mt-8 md:mt-14">
      <h1 className="text-xl md:text-3xl font-bold mt-8 mb-4 md:mb-2">
        Formations Gratuites
      </h1>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {formations.map((formation) => (
          <Formation
            key={formation.id}
            id={formation.id}
            imageSrc={formation.imageSrc}
            title={formation.title}
            lessons={formation.lessons}
            duration={formation.duration}
            slug={formation.slug}
            isFree={formation.isFree}
            price={formation.price}
            showAll={formation.showAll}
          />
        ))}
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
