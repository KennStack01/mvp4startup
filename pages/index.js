import { useEffect } from "react";
import Head from "next/head";
import BlogAnnonce from "../components/Home/BlogAnnonce";
import BusinessPlansList from "../components/Home/BusinessPlan/BusinessPlansList";
import FormationsList from "../components/Home/Formation/FormationsList";
import Hero from "../components/Home/Hero";
import MeilleureCommunaute from "../components/Home/MeilleureCommunaute";
import MVP4StartupText from "../components/Home/MVP4StartupText";
import NewsLetter from "../components/Home/NewsLetter";
import ProjectALaUneBanner from "../components/Home/ProjectALaUne/ProjectALaUneBanner";
import ProjectsList from "../components/Home/Projects/ProjectsList";
import Layout from "../components/Layout";

export default function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>Accueil | MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <Hero />
        <FormationsList />
        <ProjectsList projects={projects} />
        <BusinessPlansList />
        <ProjectALaUneBanner />
        <MeilleureCommunaute />
        <BlogAnnonce />
        <MVP4StartupText />
        <NewsLetter />
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
