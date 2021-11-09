import React from "react";
import CourseTimestamp from "./CourseTimestamp";

const DetailsTAB = ({ color = "light-pink", formation }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex w-full z-0">
        <div className="w-full">
          <div className="flex">
            <ul
              className="md:flex flex-row grid grid-cols-3 md:justify-between mb-0 list-none flex-wrap pt-3 pb-4 px-2 text-gray-700 font-semibold md:w-full"
              role="tablist"
              id="MenuTab"
            >
              <li className="-mb-px mx-2 md:mx-1 md:my-1 my-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 rounded-sm block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-" + "light-pink" + "-500"
                      : "text-" + color + "-600 bg-gray-100")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Détails
                </a>
              </li>
              <li className="-mb-px mx-2 md:mx-1 md:my-1 my-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 rounded-sm block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-" + "light-pink" + "-500"
                      : "text-" + color + "-600 bg-gray-100")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Leçons
                </a>
              </li>
              <li className="-mb-px mx-2 md:mx-1 md:my-1 my-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 rounded-sm block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-" + "light-pink" + "-500"
                      : "text-" + color + "-600 bg-gray-100")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          <div className="relative flex flex-col min-w-0 break-words bg-gray-50 w-full mb-6 rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="p-4">
                    <div className="mt-4">
                      <h3 className="text-sm font-semibold my-3">
                        Description du Cours
                      </h3>
                      <p className="text-sm text-gray-800 text-justify">
                        {" "}
                        {formation.detailforma.courseDescription}{" "}
                      </p>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-sm font-semibold my-3">
                        A qui ce Projet est destiné?
                      </h3>
                      <p className="text-sm text-gray-800 text-justify">
                        {" "}
                        {formation.detailforma.audience}{" "}
                      </p>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-sm font-semibold my-3">
                        Ce que Vous allez apprendre
                      </h3>
                      <p className="text-sm text-gray-800 text-justify">
                        {" "}
                        {formation.detailforma.ceQueVousAllezApprendre}{" "}
                      </p>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-sm font-semibold my-3">
                        Les prérequis
                      </h3>
                      <p className="text-sm text-gray-800 text-justify">
                        {" "}
                        {formation.detailforma.prerequis}{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="p-4 mx-auto">
                    <CourseTimestamp data={formation} />
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="my-3">
                    {formation?.reviewformas.map((review, index) => (
                      <div
                        key={index}
                        className="flex flex-row mx-auto justify-center my-8"
                      >
                        <img
                          src={review.userAvatar}
                          alt="Avatar Image"
                          className="my-auto h-16 w-16 p-1 rounded-full bg-white"
                        />
                        <div className="flex flex-col mx-3 md:mx-4 my-auto md:w-2/3 bg-white p-2 rounded">
                          <h4 className="text-xs font-semibold mb-1">
                            {" "}
                            {/* {review.userName}{" "} */}
                            Unknown User
                          </h4>
                          <p className="text-xs text-gray-800">
                            {" "}
                            {review.comment}{" "}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsTAB;

// export default function DetailsTAB() {
//   return (
//     <>
//       <DetailsTAB color="light-pink" />
//     </>
//   );
// }
