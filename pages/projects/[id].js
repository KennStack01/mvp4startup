import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";

const ProjectComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title> {id} | MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <div className="text-gray-800 font-semibold text-center mx-auto text-xl md:text-2xl mt-8">
          Page Project ID: {id}
        </div>
      </Layout>
    </div>
  );
};

export default ProjectComponent;
