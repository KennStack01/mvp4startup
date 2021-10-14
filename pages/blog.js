import Head from "next/head";
import Layout from "../components/Layout";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog - MVP4Startup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout></Layout>
    </div>
  );
}
