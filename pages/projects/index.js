import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import FormationsList from "../../components/Projects/FormationsList/FormationsList";
import Hero from "../../components/Projects/Hero";
import ProjectALaUneBanner from "../../components/Projects/ProjectALaUne/ProjectALaUneBanner";
import ProjectsList from "../../components/Projects/ProjectsList/ProjectsList";

export default function Index({ projects }) {
  return (
    <div>
      <Head>
        <title>Projets | MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <Hero />
        <ProjectALaUneBanner />
        <FormationsList />
        <ProjectsList projects={projects} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const projects = await fetch("http://localhost:3002/projects").then((res) =>
    res.json()
  );

  return {
    props: {
      projects,
    },
  };
}
