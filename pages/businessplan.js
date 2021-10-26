import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/BusinessPlan/Hero";

export default function BusinessPlan() {
  return (
    <div>
      <Head>
        <title>Busines Plan - MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <Hero />
      </Layout>
    </div>
  );
}
