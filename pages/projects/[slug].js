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

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}
