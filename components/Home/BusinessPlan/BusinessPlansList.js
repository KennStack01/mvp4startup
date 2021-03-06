import React from "react";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import BusinessPlan from "./BusinessPlan";

const BusinessPlansList = ({ businessPlans }) => {
  return (
    <div className="mt-8 md:mt-14">
      <h1 className="text-xl md:text-3xl font-bold mt-8 mb-4 md:mb-2">
        Business Plans
      </h1>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {businessPlans.map((businessPlan) => (
          <BusinessPlan
            key={businessPlan.id}
            id={businessPlan.id}
            imageSrc={businessPlan.imageSrc}
            title={businessPlan.title}
            details={businessPlan.details}
            price={businessPlan.price}
            slug={businessPlan.slug}
          />
        ))}
      </div>
      <Link href="/businessplan">
        <a className="flex flex-row justify-end text-md md:text-xl text-right font-bold my-8 hover:underline">
          <h5>En savoir plus</h5>
          <BsArrowRightShort className="my-auto text-xl" />
        </a>
      </Link>
    </div>
  );
};

export default BusinessPlansList;
