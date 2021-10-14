import Head from "next/head";
import FormationsList from "../components/Home/Formation/FormationsList";
import Hero from "../components/Home/Hero";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Accueil - MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <Hero />
        <FormationsList />
      </Layout>
    </div>
  );
}
