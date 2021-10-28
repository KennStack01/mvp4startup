import React, { useEffect, useState } from "react";
import Link from "next/link";

const BusinessPlanALaUne = () => {
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

  const businessPlan = {
    id: 1,
    slug: "business-plan-mvp",
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzJTIwcGxhbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    title: "Business Plan MVP",
    details:
      "Create an account and receive your first 100 points. Submit an article to earn more and unlock your first project. Enjoy learning about new CSS frameworks, animation libraries, and SEO.",
    category: "Agriculture",
    isFree: false,
    price: 75,
    showAll: true,
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-xl my-3 md:my-5 mx-3 md:mx-auto hover:shadow-xl">
        <img
          src={businessPlan.imageSrc}
          alt="Picture of the training"
          width={250}
          height={100}
          className="h-3/6 md:h-full md:w-3/6 rounded-xl w-full object-cover"
        />
        <div className="flex flex-col justify-center text-gray-900 h-3/6 md:h-full md:w-3/6">
          <Link href={businessPlan.slug}>
            <a className="text-md md:text-xl text-center font-bold mx-auto mt-4 mb-1 hover:text-gray-900 hover:underline">
              {businessPlan.title}
            </a>
          </Link>
          <div className="flex flex-col mx-3 md:mx-4 my-2">
            <h3 className="text-sm md:text-md font-semibold md:mt-8">
              Détails:
            </h3>
            <p className="text-xs md:text-sm text-justify">
              {" "}
              {businessPlan.details.substring(0, 500)}
              {"..."}{" "}
            </p>
          </div>
          <div className="bg-gray-900 text-white mx-auto my-2 md:my-1 p-3 md:p-1 font-semibold rounded-xl md:rounded-sm md:text-md transform transition duration-500 hover:scale-110">
            {/* <Link href={businessPlan.slug}> */}
            <Link href={`/businessplan/${businessPlan.slug}`}>
              <a className="">
                <h5 className="mx-auto md:my-auto ">
                  {" "}
                  Acheter ce Business Plan{" "}
                </h5>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlanALaUne;
