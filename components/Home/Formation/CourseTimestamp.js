import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const CourseTimestamp = ({ data }) => {
  return (
    <div className="flex flex-col md:grid grid-cols-2 text-sm md:text-md">
      {data.lessonformas.map((item, index) => (
        <div key={index} className="flex flex-row my-2 mx-auto">
          <FaGraduationCap className="text-3xl text-light-pink-500 my-auto" />
          <div className="flex flex-row justify-between my-auto text-gray-800">
            <h3 className="font-semibold text-xs mx-2 my-auto">
              {" "}
              Part {index + 1}: {item.topic}{" "}
            </h3>
            <p className="mx-3 text-xs my-auto text-white bg-gray-800 p-1">
              {" "}
              {item.duration}{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseTimestamp;
