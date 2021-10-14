import Head from "next/head";
import Layout from "../components/Layout";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog - MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout></Layout>
    </div>
  );
}
