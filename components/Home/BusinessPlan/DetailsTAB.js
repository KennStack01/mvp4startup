import React from "react";

const DetailsTAB = ({ color = "light-pink", businessplan }) => {
  const [openTab, setOpenTab] = React.useState(1);
  console.log(businessplan);
  return (
    <>
      <div className="flex w-full z-0">
        <div className="w-full">
          <div className="flex">
            <ul
              className="md:flex flex-row grid grid-cols-2 mx-auto justify-between mb-0 list-none flex-wrap pt-3 pb-4 px-2 text-gray-700 font-semibold md:w-full"
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
                  Description
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
                        {businessplan.businessplandetail.description}{" "}
                      </p>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-sm font-semibold my-3">
                        A qui ce Projet est destin???
                      </h3>
                      <p className="text-sm text-gray-800 text-justify">
                        {" "}
                        {businessplan.businessplandetail.audience}{" "}
                      </p>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-sm font-semibold my-3">
                        Ce que Vous allez apprendre
                      </h3>
                      <p className="text-sm text-gray-800 text-justify">
                        {" "}
                        {
                          businessplan.businessplandetail
                            .cequevousallezapprendre
                        }{" "}
                      </p>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-sm font-semibold my-3">
                        Les pr??requis
                      </h3>
                      <p className="text-sm text-gray-800 text-justify">
                        {" "}
                        {businessplan.businessplandetail.prerequis}{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="my-3">
                    {businessplan?.reviewbsps.map((review) => (
                      <div className="flex flex-row mx-auto justify-center my-8">
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
