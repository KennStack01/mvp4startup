import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import DetailsTAB from "../../../components/Home/Projects/DetailsTAB";

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
          <h1 className="text-xl md:text-2xl font-semibold text-center text-gray-700">
            {" "}
            {project.title}{" "}
          </h1>
          <div className="my-4 flex flex-col">
            <iframe
              width="100%"
              height="100%"
              src={embedURL}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={project.title}
              className="rounded-sm h-96 w-80 md:w-2/3 md:mx-auto"
            />
            <div className="flex flex-row mx-auto my-2">
              <h3 className=" bg-light-pink-500 font-semibold my-auto text-lg p-1 md:p-3 text-white">
                {" "}
                ${project.price.toString()}{" "}
              </h3>
              {/* <Link href="/projects/[id]" as={`/projects/${project.id}`}> */}
              <Link href={`/projects/${project.id}`}>
                <a className="p-1 md:p-3 font-semibold text-lg cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-800">
                  <h5 className="mx-auto md:my-auto ">
                    {" "}
                    {project.isFree ? "Débuter" : "Acheter"}{" "}
                  </h5>
                </a>
              </Link>
            </div>
          </div>
          <div className="md:w-2/3 mx-auto">
            <DetailsTAB />
            {/* <DetailsTAB project={project} /> */}
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
