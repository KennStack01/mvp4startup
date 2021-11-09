import React from "react";
import Image from "next/image";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

const Project = ({
  id,
  imageSrc = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40gmonne%2Fsimple-app-layout-with-office-ui-fabric-react-2eac6361e1b4&psig=AOvVaw3hfbrCeQcwX1QNhDk5LqQ1&ust=1634299218822000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjS9prtyfMCFQAAAAAdAAAAABAD",
  title,
  slug,
  lessons,
  duration,
  notes = 4,
  technologies,
  isFree,
  price,
  showAll,
}) => {
  let API = "http://localhost:3002/projects/"; //Image domain: to be set
  const myLoader = ({ src }) => {
    return `${API}${src}`;
  };

  return (
    <div className="flex flex-col bg-white shadow-md rounded-xl my-3 md:my-5 sm:mx-2 md:mx-1 hover:shadow-xl">
      <div className="flex flex-col justify-center text-gray-900 h-1/2">
        <Link href="/projects/[id]" as={`/projects/${id}`}>
          <a className="text-xl md:text-2xl text-center font-bold mx-auto my-2 hover:text-dark-pink-500">
            {title}
          </a>
        </Link>
        <div className="flex flex-row justify-center md:my-auto text-xs md:text-xs my-2">
          <div className="flex flex-row mx-2">
            {" "}
            <BsFillCollectionPlayFill className="text-md md:text-xl my-auto" />{" "}
            <p className="text-xs my-auto mx-1"> {lessons.length} leçons </p>
          </div>
          <div className="flex flex-row mx-2">
            {" "}
            <AiOutlineFieldTime className="text-md md:text-xl my-auto" />{" "}
            <p className="text-xs my-auto"> {duration} </p>
          </div>
        </div>
        <div className="my-2 mx-2 md:mx-3">
          <h3 className="text-xs text-center">
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
        className="h-1/2 w-full object-cover"
      />
      <div className="flex flex-row justify-between bg-dark-pink-500 text-white px-3 py-2 md:px-5 rounded-b-xl h-1/6 w-full">
        <h1 className="my-auto text-xl font-semibold"> ${price.toString()} </h1>
        {/* <Link href={`/projects/${slug}`}> */}
        <Link href="/projects/[id]" as={`/projects/${id}`}>
          <a className="p-1 md:p-2 my-auto font-semibold text-xl cursor-pointer bg-white hover:bg-gray-100 text-gray-800 rounded">
            <h5 className="mx-auto md:my-auto ">
              {" "}
              {isFree ? "Ouvrir" : "Acheter"}{" "}
            </h5>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Project;
