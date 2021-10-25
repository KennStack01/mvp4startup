import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "-!svg-react-loader!../../public/svg/teamWebsite.svg";
import { BsArrowRight, BsArrowDown } from "react-icons/bs";

const Hero = () => {
  return (
    // <div className="flex flex-col md:flex-row justify-between bg-back-pink-500 px-5 py-6 md:pb-20 rounded-xl">
    //   <div className="hidden lg:block">
    //     <HeroImage
    //       className="w-1/2 ml-20 object-cover"
    //       style={{ width: "70%", height: "inherit" }}
    //     />
    //   </div>
    //   <div className="md:mr-20"></div>
    //   <div className="flex flex-col md:text-right lg:absolute md:z-20 md:mt-14">
    //     <h1 className="font-bold text-4xl md:text-6xl text-dark-pink-500 w-full md:mr-20">
    //       Bienvenu(e)
    //     </h1>
    //     <p className="text-md font-semibold my-4">
    //   dans le manoir d’apprentissage de la conception des meilleures idées
    //   de startup. Vous apprendrez à coder, comprendre la logique, financer
    //   votre entreprise et lancer votre startup.
    //     </p>
    //   </div>
    // </div>
    <div className="flex flex-col md:flex-row md:my-2 mx-2 text-dark-pink-800 bg-back-pink-500 p-5 rounded-lg">
      <div className="my-auto md:w-1/2">
        <HeroImage style={{ width: "90%", height: "inherit" }} />
      </div>
      <div className="my-auto md:w-1/2 flex flex-col">
        {" "}
        <h1 className="font-bold text-4xl md:text-6xl text-dark-pink-500 w-full md:mr-20">
          Bienvenu(e){" "}
        </h1>
        <h5 className="text-md font-semibold my-4">
          dans le manoir d’apprentissage de la conception des meilleures idées
          de startup. Vous apprendrez à coder, comprendre la logique, financer
          votre entreprise et lancer votre startup.
        </h5>
      </div>
    </div>
  );
};

export default Hero;
