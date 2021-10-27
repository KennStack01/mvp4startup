import Head from "next/head";
import Layout from "../../components/Layout";

export default function Projects({ title }) {
  return (
    <div>
      <Head>
        <title> {title} | MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout></Layout>
    </div>
  );
}
