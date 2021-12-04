import React from "react";
import Link from "next/link";
import { SiAirplayvideo } from "react-icons/si";

const CourseTimestamp = ({ data }) => {
  return (
    <div className="flex flex-col text-sm md:text-md">
      {data.lessons.map((item, index) => (
        <Link
          href="/projects/[id]/dashboard"
          as={`/projects/1/dashboard`}
          key={index}
        >
          <a className="flex flex-row my-4 text-left hover:bg-gray-200 hover:ml-3 hover:p-1 hover:rounded-sm hover:cursor-pointer transition-all duration-150 ease-linear">
            {/* Title of a Chapter, put it here */}
            <SiAirplayvideo className="text-3xl hidden md:block mx-2 text-light-pink-500 my-auto" />
            <div className="flex flex-row justify-between my-auto text-gray-800">
              <div className="flex flex-col text-left">
                <h3 className="font-semibold text-xs my-auto">
                  {" "}
                  Part {index + 1}: {item.topic}{" "}
                </h3>
                <p className="text-xs text-gray-800"> {item.note} </p>
              </div>
              <p className="text-xs mx-2 my-auto text-white bg-gray-800 p-1 rounded-sm">
                {" "}
                {item.duration}{" "}
              </p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default CourseTimestamp;
