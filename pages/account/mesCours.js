import React from "react";
import Head from "next/head";
import CourseChapters from "../../components/Dashboard/CourseChapters";
import { courseDetails } from "../../data/coursesDetails";
import Layout from "../../components/Dashboard/Layout";
import BusinessPlansList from "../../components/BusinessPlan/BusinessPlansList";
import ProjectsList from "../../components/Projects/ProjectsList/ProjectsList";
import FormationsList from "../../components/Projects/FormationsList/FormationsList";

import { server } from "../../config";

const Menu = ({ projects, formations, businessplans }) => {
  return (
    <div>
      <Head>
        <title>Mes Cours - MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <div className="flex md:flex-row justify-center mx-auto">
          <div className="flex flex-col">
            <h1 className="my-3 text-center text-lg md:text-3xl font-semibold text-gray-700">
              Liste de mes cours par Catégorie
            </h1>
            <FormationsList formations={formations} />
            <ProjectsList projects={projects} />
            <BusinessPlansList businessPlans={businessplans} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Menu;

export async function getStaticProps() {
  try {
    const res = await fetch(`${server}/projects`);
    const projects = await res.json();
    const formations = await fetch(`${server}/formations`).then((res) =>
      res.json()
    );
    const businessplans = await fetch(`${server}/businessplans`).then((res) =>
      res.json()
    );
    return {
      props: {
        projects,
        formations,
        businessplans,
      },
    };
  } catch (error) {
    console.error(error.message);
  }

  return {
    props: {
      projects: [],
      formations: [],
      businessplans: [],
    },
  };
}
