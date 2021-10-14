import React from "react";
import Image from "next/image";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";

const Formation = ({
  imageSrc = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40gmonne%2Fsimple-app-layout-with-office-ui-fabric-react-2eac6361e1b4&psig=AOvVaw3hfbrCeQcwX1QNhDk5LqQ1&ust=1634299218822000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjS9prtyfMCFQAAAAAdAAAAABAD",
  title,
  lessons,
  duration,
  slug = "/projects",
}) => {
  return (
    <div className="flex flex-row bg-back-pink-500 rounded-lg my-3 md:my-5 md:mx-1 hover:shadow-lg">
      <Link href={slug}>
        <Image
          // loader={myLoader}
          src={imageSrc}
          alt="Picture of the training"
          width={250}
          height={100}
          className="w-1/4 rounded-l-xl object-cover"
        />
      </Link>
      <div className="flex flex-col justify-center text-gray-900 w-3/4">
        <Link href={slug}>
          <a className="text-md md:text-md text-center font-bold mx-auto my-2 hover:text-dark-pink-500">
            {title}
          </a>
        </Link>
        <div className="flex flex-row justify-evenly md:my-auto text-sm md:text-md my-2">
          <div className="flex flex-row">
            {" "}
            <BsFillCollectionPlayFill className="text-md md:text-xl my-auto" />{" "}
            <p className="text-sm md:text-md my-auto"> {lessons} leçons </p>
          </div>
          <div className="flex flex-row">
            {" "}
            <AiOutlineFieldTime className="text-md md:text-xl my-auto" />{" "}
            <p className="text-sm md:text-md my-auto"> {duration} </p>
          </div>
        </div>
        <Link href={slug}>
          <a className="flex justify-evenly mx-5 md:mx-20 my-2 font-semibold text-md md:text-lg md:my-2 cursor-pointer bg-light-pink-500 hover:bg-light-pink-600 text-white p-1 rounded">
            <h5 className="mx-auto"> Découvrir </h5>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Formation;
