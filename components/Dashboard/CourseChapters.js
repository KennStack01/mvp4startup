import React from "react";
import Link from "next/link";
import { SiAirplayvideo } from "react-icons/si";
import { courseDetails } from "../../data/coursesDetails";
import { useRouter } from "next/router";

const CourseChapters = () => {
  const router = useRouter();

  return (
    <div className="h-screen min-h-screen sticky z-40 top-0 overflow-y-auto">
      <div className=" justify-self-start ml-0">
        <h1 className="font-semibold text-md my-2">Nom du Cours</h1>
        {courseDetails.map((item, index) => (
          <div key={index} className="mx-2 flex flex-row">
            <div className="">
              <h1 className="font-semibold text-sm  mx-auto bg-white shadow-sm p-2 my-2">
                {" "}
                Chapter {item.chapter} - {item.title}{" "}
              </h1>
              <div className="flex flex-col">
                {item.content.map((item, index) => (
                  <Link
                    href="/projects/[id]/dashboard/[lesson]"
                    as={`/projects/[id]/dashboard/${item.index}`}
                    key={index}
                  >
                    <a
                      className={`${
                        router.pathname ==
                        `/projects/[id]/dashboard/${item.index}`
                          ? "active ml-3 p-1 rounded-sm cursor-pointer"
                          : ""
                      } flex flex-row my-4 text-left hover:bg-gray-200 hover:ml-3 hover:p-1 hover:rounded-sm hover:cursor-pointer transition-all duration-150 ease-linear`}
                    >
                      <div className="flex flex-row">
                        <SiAirplayvideo className="text-2xl hidden md:block mx-2 text-light-pink-500 my-auto" />
                        <h3 className="mx-2 text-xs my-auto">
                          {" "}
                          {item.index}.{" "}
                        </h3>
                        <h3 className="font-semibold text-xs my-auto">
                          {" "}
                          {item.title}{" "}
                        </h3>
                      </div>
                      <div className="flex flex-row justify-between my-auto text-gray-800">
                        <div className="flex flex-col text-left">
                          {/* <p className="text-xs text-gray-800"> {item.note} </p> */}
                        </div>
                        {/* <p className="text-xs mx-2 my-auto text-white bg-gray-800 p-1 rounded-sm">
                        {" "}
                        {item.duration}{" "}
                        </p> */}
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseChapters;
