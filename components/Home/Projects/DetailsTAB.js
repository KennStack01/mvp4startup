import React from "react";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex w-full z-0">
        <div className="w-full">
          <div className="flex md:sticky top-0 z-10">
            <ul
              className="md:flex flex-row grid grid-cols-3 md:justify-between mb-0 list-none flex-wrap pt-3 pb-4 px-2 text-gray-700 font-semibold md:backdrop-filter md:backdrop-blur-xl md:shadow-sm md:w-full"
              role="tablist"
              id="MenuTab"
            >
              <li className="-mb-px mx-2 md:mx-1 md:my-1 my-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 rounded-sm block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-" + "light-pink" + "-500"
                      : "text-" + color + "-600 bg-white")
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
                      : "text-" + color + "-600 bg-white")
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
                      : "text-" + color + "-600 bg-white")
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
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <h1>Détails</h1>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <h1>Leçons</h1>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <h1>Reviews</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DetailsTAB() {
  return (
    <>
      <Tabs color="light-pink" />
    </>
  );
}
