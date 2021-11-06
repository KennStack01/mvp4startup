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
    // fetchBusinessPlans();
    // console.log("BusinessPlansList", businessPlans);
  }, []);

  // console.log("Project", businessPlans[0]);

  const project = {
    id: 1,
    slug: "amazon-clone",
    imageSrc:
      "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    title: "Amazon Clone",
    lessons: 13,
    duration: "10h 30min",
    technologies: "HTML, CSS, JavaScript, React",
    note: 4,
    isFree: true,
    price: 0,
    showAll: true,
    introVideo: "https://www.youtube.com/watch?v=__IL2nMzUEw",
    details: {
      courseDescription:
        "La population est jeune passionnée et talentueuse, tout est à construire. Vous trouverez ici des business plan clé en main qui vous permettra de contribuer à l’essor économique de ce continent.",
      audience:
        "La population est jeune passionnée et talentueuse, tout est à construire. Vous trouverez ici des business plan clé en main qui vous permettra de contribuer à l’essor économique de ce continent. Vous aurez toutes les informations nécessaires pour l’implémentation de chacun des Business plan, de l’offre financière, du plan de dépense, des ressources humaines, des contacts des partenariats.",
      ceQueVousAllezApprendre:
        "La population est jeune passionnée et talentueuse, tout est à construire. Vous trouverez ici des business plan clé en main qui vous permettra de contribuer à l’essor économique de ce continent. Vous aurez toutes les informations nécessaires pour l’implémentation de chacun des Business plan, de l’offre financière, du plan de dépense.",
      prerequis:
        "La population est jeune passionnée et talentueuse, tout est à construire. Vous trouverez ici des business plan clé en main qui vous permettra de contribuer à l’essor économique de ce continent. Vous aurez toutes les informations nécessaires",
    },
    lessonsList: [
      {
        topic: "What is Reactjs?",
        duration: "01:30",
      },
      {
        topic: "What is Reactjs?",
        duration: "01:30",
      },
      {
        topic: "What is Reactjs?",
        duration: "01:30",
      },
      {
        topic: "What is Reactjs?",
        duration: "01:30",
      },
      {
        topic: "What is Reactjs?",
        duration: "01:30",
      },
      {
        topic: "What is Reactjs?",
        duration: "01:30",
      },
      {
        topic: "What is Reactjs?",
        duration: "01:30",
      },
      {
        topic: "What is Reactjs?",
        duration: "01:30",
      },
      {
        topic: "What is Reactjs?",
        duration: "01:30",
      },
    ],
    reviews: [
      {
        userEmail: "kenn@gmail.com",
        userName: "John Doe",
        userAvatar: "https://avatars.githubusercontent.com/u/67477516?v=4",
        comment:
          "Un Cours très interessant pour les Beginners, les débutants se retrouvent facilement avec leur manière d'expliquer les Concepts",
      },
      {
        userEmail: "kenn@gmail.com",
        userName: "John Doe",
        userAvatar: "https://avatars.githubusercontent.com/u/67477516?v=4",
        comment:
          "Un Cours très interessant pour les Beginners, les débutants se retrouvent facilement avec leur manière d'expliquer les Concepts",
      },
      {
        userEmail: "kenn@gmail.com",
        userName: "John Doe",
        userAvatar: "https://avatars.githubusercontent.com/u/67477516?v=4",
        comment:
          "Un Cours très interessant pour les Beginners, les débutants se retrouvent facilement avec leur manière d'expliquer les Concepts",
      },
      {
        userEmail: "kenn@gmail.com",
        userName: "John Doe",
        userAvatar: "https://avatars.githubusercontent.com/u/67477516?v=4",
        comment:
          "Un Cours très interessant pour les Beginners, les débutants se retrouvent facilement avec leur manière d'expliquer les Concepts",
      },
      {
        userEmail: "kenn@gmail.com",
        userName: "John Doe",
        userAvatar: "https://avatars.githubusercontent.com/u/67477516?v=4",
        comment:
          "Un Cours très interessant pour les Beginners, les débutants se retrouvent facilement avec leur manière d'expliquer les Concepts",
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col md:flex-row bg-white shadow rounded-xl my-3 md:my-5 mx-3 md:mx-auto hover:shadow-md">
        <div className="h-3/6 md:w-3/6 my-auto">
          <img
            src={project.imageSrc}
            alt="Picture of the training"
            width={250}
            height={100}
            className="md:h-full rounded-l-xl w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center text-gray-900 h-3/6 md:h-full md:w-3/6">
          <Link href={project.slug}>
            <a className="text-md md:text-xl text-center font-bold mx-auto mt-4 mb-1 hover:text-gray-900 hover:underline">
              {project.title}
            </a>
          </Link>
          <div className="flex flex-col mx-3 md:mx-4 my-2 md:my-1">
            <h3 className="text-sm md:text-md font-semibold">Détails:</h3>
            <p className="text-xs md:text-sm text-justify">
              {" "}
              {project.details.courseDescription.substring(0, 500)}
              {"..."}{" "}
            </p>
          </div>
          <div className="bg-light-pink-500 mx-auto my-2 md:my-1 p-2 md:p-2 text-white font-semibold rounded md:rounded-sm text-sm transform transition duration-500 hover:scale-110">
            {/* <Link href={project.slug}> */}
            <Link href="/projects/[id]" as={`/projects/${project.id}`}>
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
