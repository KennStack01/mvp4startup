import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import FormationsList from "../../components/Projects/FormationsList/FormationsList";
import Hero from "../../components/Projects/Hero";
import ProjectALaUneBanner from "../../components/Projects/ProjectALaUne/ProjectALaUneBanner";
import ProjectsList from "../../components/Projects/ProjectsList/ProjectsList";

export default function Index({ projects, formations }) {
  return (
    <div>
      <Head>
        <title>Projets | MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <Hero />
        <ProjectALaUneBanner />
        <FormationsList formations={formations} />
        <ProjectsList projects={projects} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  // const projects = await fetch("http://localhost:3002/projects").then((res) =>
  const projects = await fetch(
    "https://mvp4startup-api.herokuapp.com/api/v1/projects"
  ).then((res) => res.json());

  const formations = await fetch(
    "https://mvp4startup-api.herokuapp.com/api/v1/formations"
  ).then((res) => res.json());

  return {
    props: {
      projects,
      formations,
    },
  };
}
