import Head from "next/head";
import Layout from "../../components/Layout";
import Hero from "../../components/BusinessPlan/Hero";
import BusinessPlanALaUneBanner from "../../components/BusinessPlan/BusinessPlanALaUne/BpALaUneBanner";
import BusinessPlansList from "../../components/BusinessPlan/BusinessPlansList";

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
  const businessplans = await fetch("http://localhost:3002/businessPlans").then(
    (res) => res.json()
  );

  return {
    props: {
      businessplans,
    },
  };
}
