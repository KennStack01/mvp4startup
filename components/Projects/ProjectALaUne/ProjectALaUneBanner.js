import React from "react";
import ProjectALaUne from "./ProjectALaUne";
// import TeamProject from "-!svg-react-loader!../../../public/svg/teamProject.svg";

const ProjectALaUneBanner = () => {
  return (
    <div className="my-4 md:my-10">
      <h1 className="text-xl md:text-3xl text-center font-bold mt-8 mb-4 md:mb-2">
        Project à la Une!
      </h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-2/4 mx-auto">
          <ProjectALaUne />
        </div>
        {/* <div className="hidden md:block">
          <TeamProject style={{ width: "90%", height: "inherit" }} />
        </div> */}
      </div>
      <div></div>
    </div>
  );
};

export default ProjectALaUneBanner;
