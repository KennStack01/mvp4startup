import React, { useEffect, useState } from "react";
import Link from "next/link";

const ProjectALaUne = () => {
  const [businessPlans, setBusinessPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBusinessPlans = async () => {
    // let URL = "http://localhost:4000/home/index_bsp";
    let URL = "";

    try {
      const res = await fetch(URL);
      const businessPlans = await res.json();
      setBusinessPlans(businessPlans);
      setLoading(false);
      // console.log(businessPlans);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBusinessPlans();
    // console.log("BusinessPlansList", businessPlans);
  }, []);

  // console.log("Project", businessPlans[0]);

  const project = {
    id: 11,
    title: "business-plan-mvp",
    imagesrc:
      "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvamVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    details:
      "Create an account and receive your first 100 points. Submit an article to earn more and unlock your first project. Enjoy learning about new CSS frameworks, animation libraries, and SEO.",
    description: null,
    price: 75,
    slug: "business-plan-mvp",
    utilisateur_id: 2,
    created_at: "2021-10-19T19:14:02.468Z",
    updated_at: "2021-10-19T19:14:02.468Z",
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-xl my-3 md:my-5 mx-3 md:mx-auto hover:shadow-xl">
        <img
          src={project.imagesrc}
          alt="Picture of the training"
          width={250}
          height={100}
          className="h-3/6 md:h-full md:w-3/6 rounded-xl w-full object-cover"
        />
        <div className="flex flex-col justify-center text-gray-900 h-3/6 md:h-full md:w-3/6">
          <Link href={project.slug}>
            <a className="text-md md:text-xl text-center font-bold mx-auto mt-4 mb-1 hover:text-gray-900 hover:underline">
              {project.title}
            </a>
          </Link>
          <div className="flex flex-col mx-3 md:mx-4 my-2 md:my-10">
            <h3 className="text-sm md:text-md font-semibold">Détails:</h3>
            <p className="text-xs md:text-sm text-justify">
              {" "}
              {project.details.substring(0, 500)}
              {"..."}{" "}
            </p>
          </div>
          <div className="bg-light-pink-500 mx-auto my-2 md:my-1 p-3 md:p-1 text-white font-semibold rounded-xl md:rounded-sm md:text-md transform transition duration-500 hover:scale-110">
            {/* <Link href={project.slug}> */}
            <Link href="/">
              <a className="">
                <h5 className="mx-auto md:my-auto "> Voir plus de Détails </h5>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectALaUne;
