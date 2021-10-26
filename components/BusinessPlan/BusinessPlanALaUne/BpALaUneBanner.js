import React from "react";
import BusinessPlanALaUne from "./BpALaUne";
// import TeamProject from "-!svg-react-loader!../../../public/svg/teamProject.svg";

const BusinessPlanALaUneBanner = () => {
  return (
    <div className="my-4 md:my-10">
      <h1 className="text-xl md:text-3xl text-center font-bold mt-8 mb-4 md:mb-2">
        Business Plan à la Une!
      </h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-3/4 mx-auto">
          <BusinessPlanALaUne />
        </div>
        {/* <div className="hidden md:block">
          <TeamProject style={{ width: "90%", height: "inherit" }} />
        </div> */}
      </div>
      <div></div>
    </div>
  );
};

export default BusinessPlanALaUneBanner;
