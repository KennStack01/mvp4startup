import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import FormationsList from "../../components/Projects/FormationsList/FormationsList";
import Hero from "../../components/Projects/Hero";
import ProjectALaUneBanner from "../../components/Projects/ProjectALaUne/ProjectALaUneBanner";
import ProjectsList from "../../components/Projects/ProjectsList/ProjectsList";
import { server } from "../../config";

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

  try {
    const res = await fetch(`${server}/projects`);
    const projects = await res.json();
    const formations = await fetch(`${server}/formations`).then((res) =>
      res.json()
    );
    return {
      props: {
        projects,
        formations,
      },
    };
  } catch (error) {
    console.log(error.message);
  }

  return {
    props: {
      projects: [],
      formations: [],
    },
  };
  // const projects = await fetch(`${server}/projects`).then((res) =>
  //   res.json()
  // );

  // const formations = await fetch(`${server}/formations`).then((res) =>
  //   res.json()
  // );

  // return {
  //   props: {
  //     projects,
  //     formations,
  //   },
  // };
}
