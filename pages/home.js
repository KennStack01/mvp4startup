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

import { getSession, useSession } from "next-auth/react";

export default function Home({ user }) {
  const { data: session } = useSession();

  //   if (loading) {
  //     return <p className="text-3xl font-bold text-center">Loading...</p>;
  //   }
  if (!session) {
    return (
      <p className="text-3xl font-bold text-center">You are not logged in!</p>
    );
  }

  return (
    <div>
      <Head>
        <title>Accueil - MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <Hero />

        <h1 className="text-3xl font-bold text-center">
          Welcome, {session.user.name} !
        </h1>
        {/* <FormationsList />
        <ProjectsList />
        <BusinessPlansList />
        <ProjectALaUneBanner /> */}
        <MeilleureCommunaute />
        <BlogAnnonce />
        <MVP4StartupText />
        <NewsLetter />
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    context.res.writeHead(302, { Location: "/" });
    context.res.end();
    return {};
  }
  return {
    props: {
      user: session.user,
    },
  };
}
