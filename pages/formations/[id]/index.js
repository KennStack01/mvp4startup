import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import DetailsTAB from "../../../components/Home/Formation/DetailsTAB";

const FormationComponent = ({ formation }) => {
  console.log(formation);

  const videoID = formation.introVideo.replace(
    "https://www.youtube.com/watch?v=",
    ""
  );
  const embedURL = `https://www.youtube.com/embed/${videoID}`;

  return (
    <div>
      <Head>
        <title> {formation?.title} | MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-semibold text-center text-gray-700">
            {" "}
            {formation.title}{" "}
          </h1>
          <div className="my-4 flex flex-col">
            <iframe
              width="100%"
              height="100%"
              src={embedURL}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={formation.title}
              className="rounded-sm h-96 w-80 md:w-2/3 md:mx-auto"
            />
            <div className="flex flex-row mx-auto my-2">
              <h3 className="font-semibold my-auto text-lg p-1 md:p-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-l-sm">
                {" "}
                ${formation.price.toString()}{" "}
              </h3>
              {/* <Link href="/formations/[id]" as={`/formations/${formation.id}`}> */}
              <Link href={`/formations/${formation.id}`}>
                <a className="p-1 md:p-3 font-semibold text-lg cursor-pointer text-white bg-light-pink-500  rounded-r-sm">
                  <h5 className="mx-auto md:my-auto ">
                    {" "}
                    {formation.isFree ? "Débuter" : "Acheter"}{" "}
                  </h5>
                </a>
              </Link>
            </div>
          </div>
          <div className="md:w-2/3 mx-auto">
            <DetailsTAB formation={formation} />
            {/* <DetailsTAB formation={formation} /> */}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default FormationComponent;

export async function getStaticProps({ params }) {
  const formation = await fetch(
    `http://localhost:3002/formations/${params.id}`
  ).then((res) => res.json());

  return {
    props: {
      formation,
    },
  };
}

export async function getStaticPaths() {
  const formations = await fetch("http://localhost:3002/formations").then(
    (res) => res.json()
  );

  return {
    paths: formations.map((formation) => {
      return {
        params: {
          id: formation.id.toString(),
          slug: formation.slug,
        },
      };
    }),
    fallback: false,
  };
}
