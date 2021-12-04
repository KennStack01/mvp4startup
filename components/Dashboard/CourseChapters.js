import React from "react";
import Link from "next/link";
import { SiAirplayvideo } from "react-icons/si";
import { courseDetails } from "../../data/coursesDetails";

const CourseChapters = () => {
  return (
    <div className="flex flex-row">
      <div className=" justify-self-start ml-0">
        {courseDetails.map((item, index) => (
          <div key={index} className="mx-2">
            <h1 className="font-semibold text-xl mx-auto bg-white shadow-sm p-2 my-2">
              {" "}
              Chapter {item.chapter} - {item.title}{" "}
            </h1>
            <div className="flex flex-col">
              {item.content.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row my-4 text-left hover:bg-gray-200 hover:ml-3 hover:p-1 hover:rounded-sm hover:cursor-pointer transition-all duration-150 ease-linear"
                >
                  <div className="flex flex-row">
                    <SiAirplayvideo className="text-3xl hidden md:block mx-2 text-light-pink-500 my-auto" />
                    <h3 className="mx-2"> {item.index} </h3>
                  </div>
                  <div className="flex flex-row justify-between my-auto text-gray-800">
                    <div className="flex flex-col text-left">
                      <h3 className="font-semibold text-xs my-auto">
                        {" "}
                        {item.title}{" "}
                      </h3>
                      {/* <p className="text-xs text-gray-800"> {item.note} </p> */}
                    </div>
                    {/* <p className="text-xs mx-2 my-auto text-white bg-gray-800 p-1 rounded-sm">
                      {" "}
                      {item.duration}{" "}
                    </p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseChapters;
