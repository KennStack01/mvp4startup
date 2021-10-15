import React from "react";
import Image from "next/image";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

const BusinessPlan = ({
  imageSrc = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzJTIwcGxhbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
  title,
  details,
  price,
  slug = "/businessplan",
}) => {
  let API = "http://localhost:3002/businessPlans/"; //Image domain: to be set
  const myLoader = ({ src }) => {
    return `${API}${src}`;
  };

  return (
    <div className="flex flex-col bg-white shadow-md rounded-xl my-3 md:my-5 mx-3 md:mx-6 hover:shadow-xl">
      <img
        src={imageSrc}
        alt="Picture of the training"
        width={250}
        height={100}
        className="h-3/6 rounded-xl w-full object-cover"
      />
      <div className="flex flex-col justify-center text-gray-900 h-2/6">
        <Link href={slug}>
          <a className="text-lg md:text-xl text-center font-bold mx-auto mt-2 mb-5 hover:text-gray-900">
            {title}
          </a>
        </Link>
        <div className="flex flex-col mx-3 md:mx-4 my-2">
          <h3 className="text-md font-semibold">Détails:</h3>
          <p className="text-sm text-justify"> {details} </p>
        </div>
      </div>

      <div className="flex flex-row justify-between bg-gray-900 text-white mt-4 px-3 py-2 md:px-5 md:py-3 rounded-b-xl w-full">
        <h1 className="my-auto text-xl font-semibold"> ${price.toString()} </h1>
        <Link href={slug}>
          <a className="p-1 md:p-3 font-semibold text-xl cursor-pointer bg-white hover:bg-gray-100 text-gray-800 rounded">
            <h5 className="mx-auto md:my-auto "> Acheter </h5>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BusinessPlan;
