import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "-!svg-react-loader!../../public/svg/homeHero.svg";
import { BsArrowRight, BsArrowDown } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-back-pink-500 p-5 rounded-md">
      <div className="flex flex-col md:absolute md:z-20 md:mt-14">
        <h1 className="font-bold text-4xl md:text-6xl text-dark-pink-500 md:w-4/5">
          Apprendre à coder autrement
        </h1>
        <p className="text-md font-semibold my-4 md:w-2/3">
          en codant des clones des meilleures startups en vogue ( clone Udemy,
          leboncoin, fiverr, airbnb, instagram, Uber ….)
        </p>
        <div className="flex flex-row justify-left mt-6">
          <Link href="/">
            <a className="transform transition duration-500 hover:scale-110 text-white font-semibold bg-light-pink-600 hover:bg-dark-pink-500 rounded-md p-2">
              Accéder maintenant
            </a>
          </Link>
          <Link href="/">
            <a className="flex flex-row my-auto font-semibold mx-4">
              {" "}
              <h3>Voir les Projets</h3>{" "}
              <BsArrowRight className="my-auto text-sm md:text-2xl mx-1" />{" "}
            </a>
          </Link>
        </div>
        <div className="flex flex-row my-auto font-semibold mx-4 mt-14 text-xs">
          {" "}
          <h3>Découvrir plus</h3>{" "}
          <BsArrowDown className="my-auto text-md md:text-xl" />{" "}
        </div>
      </div>
      <div className=" mr-72"></div>
      <div className="hidden md:block">
        {/* <HeroImage className="w-5/6 -mt-48 -mr-36" /> */}
        <HeroImage className="w-1/2 -mt-48 ml-96" />
      </div>
    </div>
  );
};

export default Hero;
