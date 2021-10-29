import Layout from "../../components/Layout";
import Head from "next/head";

const ProjectComponent = ({ project }) => {
  console.log(project);

  return (
    <div>
      <Head>
        <title> {project.slug} | MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <div className="text-gray-800 font-semibold text-center mx-auto text-xl md:text-2xl mt-8">
          Page Project Slug: {project.slug}
        </div>
      </Layout>
    </div>
  );
};

export default ProjectComponent;

export async function getStaticProps({ params }) {
  const project = await fetch(
    `http://localhost:3002/projects/${params.slug}`
  ).then((res) => res.json());

  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const projects = await fetch("http://localhost:3002/projects").then((res) =>
    res.json()
  );

  return {
    paths: projects.map((project) => {
      return {
        params: { slug: project.slug },
      };
    }),
    fallback: false,
  };
}
