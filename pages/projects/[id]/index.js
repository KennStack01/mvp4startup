import Layout from "../../../components/Layout";
import Head from "next/head";

const ProjectComponent = ({ project }) => {
  console.log(project);

  return (
    <div>
      <Head>
        <title> {project?.title} | MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <div className="text-gray-800 font-semibold text-center mx-auto text-xl md:text-2xl mt-8">
          Page Project ID: {project.id} <br />
          Page Project Slug: {project.slug}
        </div>
        <img src={project.imageSrc} alt="Project Pic" />
      </Layout>
    </div>
  );
};

export default ProjectComponent;

export async function getStaticProps({ params }) {
  const project = await fetch(
    `http://localhost:3002/projects/${params.id}`
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
        params: {
          id: project.id.toString(),
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}
