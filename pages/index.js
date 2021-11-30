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
import { server } from "../config";

export default function Home({ projects, formations, businessplans }) {
  return (
    <div>
      <Head>
        <title>Accueil | MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <Hero />
        <FormationsList formations={formations} />
        <ProjectsList projects={projects} />
        <BusinessPlansList businessPlans={businessplans} />
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

  // try {
  // } catch (error) {
  //   console.error(error.message);
  // }

  // return {
  //   props: {
  //     projects: [],
  //     formations: [],
  //     businessplans: [],
  //   },
  // };

  // const projects = await fetch(`${server}/api/v1/projects`).then((res) =>
  //   res.json()
  // );

  // const formations = await fetch(`${server}/api/v1/formations`).then((res) =>
  //   res.json()
  // );

  // const businessplans = await fetch(`${server}/api/v1/businessplans`).then(
  //   (res) => res.json()
  // );

  // return {
  //   props: {
  //     projects,
  //     formations,
  //     businessplans,
  //   },
  // };
}
