import Head from "next/head";
import Layout from "../../components/Layout";
import Hero from "../../components/BusinessPlan/Hero";
import BusinessPlanALaUneBanner from "../../components/BusinessPlan/BusinessPlanALaUne/BpALaUneBanner";
import BusinessPlansList from "../../components/BusinessPlan/BusinessPlansList";
import { server } from "../../config";

export default function BusinessPlan({ businessplans }) {
  return (
    <div>
      <Head>
        <title>Busines Plan | MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <Hero />
        <BusinessPlanALaUneBanner />
        <BusinessPlansList businessPlans={businessplans} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch(`${server}/businessplans`);
    const businessplans = await response.json();
    return {
      props: {
        businessplans,
      },
    };
  } catch (error) {
    console.error(error.message);
  }

  return {
    props: {
      businessplans: [],
    },
  };

  // const businessplans = await fetch("http://localhost:3002/businessPlans").then(
  // const businessplans = await fetch(`${server}/businessplans`).then(
  //   (res) => res.json()
  // );

  // return {
  //   props: {
  //     businessplans,
  //   },
  // };
}
