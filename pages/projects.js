import Head from "next/head";
import Layout from "../components/Layout";
import FormationsList from "../components/Projects/FormationsList/FormationsList";
import Hero from "../components/Projects/Hero";
import ProjectALaUneBanner from "../components/Projects/ProjectALaUne/ProjectALaUneBanner";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projets - MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <Hero />
        <ProjectALaUneBanner />
        <FormationsList />
      </Layout>
    </div>
  );
}
