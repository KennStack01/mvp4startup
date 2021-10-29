import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import Project from "./Project";

const ProjectsList = ({ projects }) => {
  // const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const fetchProjects = async () => {
  // let URL = "http://localhost:4000/home/index_projects";
  //   let URL = "http://localhost:3002/projects";

  //   try {
  //     const res = await fetch(URL);
  //     const projects = await res.json();
  //     setProjects(projects);
  //     setLoading(false);
  //     // console.log(projects);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchProjects();
  //   console.log("ProjectsList", projects);
  // }, []);

  return (
    <div className="mt-8 md:mt-14">
      <h1 className="text-xl md:text-3xl font-bold mt-8 mb-4 md:mb-2">
        Projects Premium
      </h1>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            imageSrc={project.imageSrc}
            title={project.title}
            slug={project.slug}
            lessons={project.lessons}
            notes={project.note}
            duration={project.duration}
            price={project.price}
            technologies={project.technologies}
            isFree={project.isFree}
            showAll={project.showAll}
          />
        ))}
      </div>

      {/* <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3">
        {loading ? (
          <h1 className="text-gray-700 text-center mx-auto text-xl font-bold">
            Loading...
          </h1>
        ) : (
          projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              imageSrc={project.imageSrc}
              title={project.title}
              slug={project.slug}
              lessons={project.lessons}
              notes={project.note}
              duration={project.duration}
              price={project.price}
              technologies={project.technologies}
              isFree={project.isFree}
              showAll={project.showAll}
            />
          ))
        )}
      </div> */}
      <Link href="/projects">
        <a className="flex flex-row justify-end text-md md:text-xl text-right font-bold my-8 hover:underline">
          <h5>En savoir plus</h5>
          <BsArrowRightShort className="my-auto text-xl" />
        </a>
      </Link>
    </div>
  );
};

export default ProjectsList;
