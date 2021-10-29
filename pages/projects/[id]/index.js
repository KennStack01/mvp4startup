import Layout from "../../../components/Layout";
import Head from "next/head";

const ProjectComponent = ({ project }) => {
  console.log(project);

  const videoID = project.introVideo.replace(
    "https://www.youtube.com/watch?v=",
    ""
  );
  const embedURL = `https://www.youtube.com/embed/${videoID}`;

  return (
    <div>
      <Head>
        <title> {project?.title} | MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-center text-gray-900">
            {" "}
            {project.title}{" "}
          </h1>
          <div className="mx-2 md:mx-72 my-4 md:my-8">
            <iframe
              width="100%"
              height="100%"
              src={embedURL}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={project.title}
              // className="rounded-lg mx-3 my-4 md:my-8 w-full md:w-5/6 h-80"
              className="rounded-lg mx-auto h-96"
            />
          </div>
        </div>
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
