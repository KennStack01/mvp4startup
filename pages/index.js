import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Accueil | MVP4Startup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className="font-bold text-xl">Hello, World!</h1>
      </Layout>
    </div>
  );
}
