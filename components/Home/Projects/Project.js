import React from "react";
import Image from "next/image";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

const Project = ({
  imageSrc = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40gmonne%2Fsimple-app-layout-with-office-ui-fabric-react-2eac6361e1b4&psig=AOvVaw3hfbrCeQcwX1QNhDk5LqQ1&ust=1634299218822000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjS9prtyfMCFQAAAAAdAAAAABAD",
  title,
  lessons,
  duration,
  technologies,
  notes,
  price,
  slug = "/projects",
}) => {
  let API = "http://localhost:3002/projects/"; //Image domain: to be set
  const myLoader = ({ src }) => {
    return `${API}${src}`;
  };

  return (
    <div className="flex flex-col bg-white shadow-md rounded-xl my-3 md:my-5 mx-3 md:mx-6 hover:shadow-xl">
      <div className="flex flex-col justify-center text-gray-900 h-2/6">
        <Link href={slug}>
          <a className="text-xl md:text-2xl text-center font-bold mx-auto mt-2 mb-5 hover:text-dark-pink-500">
            {title}
          </a>
        </Link>
        <div className="flex flex-row justify-center md:my-auto text-xs md:text-xs my-3">
          <div className="flex flex-row mx-2">
            {" "}
            <BsFillCollectionPlayFill className="text-md md:text-xl my-auto" />{" "}
            <p className="text-xs my-auto"> {lessons} leçons </p>
          </div>
          <div className="flex flex-row mx-2">
            {" "}
            <AiOutlineFieldTime className="text-md md:text-xl my-auto" />{" "}
            <p className="text-xs my-auto"> {duration} </p>
          </div>
        </div>
        <div className="my-2 mx-auto">
          <h3 className="text-xs">
            {" "}
            <span className="font-semibold"> Technologies:</span> {technologies}
          </h3>
        </div>
        <div className="my-2 mx-auto">
          <h3 className="text-xs md:text-sm font-semibold">
            {" "}
            <span className=""> Notes: </span> {notes} /10
            {/* <span className="font-semibold"> Notes:</span>{" "}
            {<AiFillStar className="text-xs md:text-sm" /> * { notes }} */}
          </h3>
        </div>
      </div>
      <img
        src={imageSrc}
        alt="Picture of the training"
        width={250}
        height={100}
        className="h-3/6 w-full object-cover"
      />
      <div className="flex flex-row justify-between bg-dark-pink-500 text-white px-3 py-2 md:px-5 md:py-3 rounded-b-xl h-1/6 w-full">
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

export default Project;
