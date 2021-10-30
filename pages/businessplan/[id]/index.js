import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import DetailsTAB from "../../../components/Home/BusinessPlan/DetailsTAB";
// import BusinessPlansList from "../../../components/Home/BusinessPlan/BusinessPlansList";

const BusinessPlanComponent = ({ businessPlan }) => {
  // console.log(businessPlan);

  return (
    <div>
      <Head>
        <title> {businessPlan?.title} | MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-semibold text-center text-gray-700">
            {" "}
            {businessPlan.title}{" "}
          </h1>
          <div className="my-4 flex flex-col">
            <img
              width="100%"
              height="100%"
              src={businessPlan.imageSrc}
              alt="Business Plan Picture"
              className="rounded-sm h-96 w-80 md:w-2/3 md:mx-auto object-cover"
            />

            <div className="flex flex-row mx-auto my-2">
              <h3 className=" font-semibold my-auto text-lg p-1 md:p-3  bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-l-sm">
                {" "}
                ${businessPlan.price.toString()}{" "}
              </h3>
              <Link href={`/businessplan/${businessPlan.id}`}>
                <a className="p-1 md:p-3 font-semibold text-lg cursor-pointer text-white bg-light-pink-500  rounded-r-sm">
                  <h5 className="mx-auto md:my-auto ">
                    {" "}
                    {businessPlan.isFree ? "Débuter" : "Acheter"}{" "}
                  </h5>
                </a>
              </Link>
            </div>
          </div>
          <div className="md:w-2/3 mx-auto">
            <DetailsTAB businessplan={businessPlan} />
          </div>
          {/* <div className="my-5 md:my-10">
            <h1>Autres Business Plans de la même Catégorie</h1>
            <div>
              <BusinessPlansList businessPlans={businessPlansList} />
            </div>
          </div> */}
        </div>
      </Layout>
    </div>
  );
};

export default BusinessPlanComponent;

export async function getStaticProps({ params }) {
  const businessPlan = await fetch(
    `http://localhost:3002/businessPlans/${params.id}`
  ).then((res) => res.json());

  return {
    props: {
      businessPlan,
    },
  };
}

export async function getStaticPaths() {
  const businessPlans = await fetch("http://localhost:3002/businessPlans").then(
    (res) => res.json()
  );

  return {
    paths: businessPlans.map((businessPlan) => {
      return {
        params: {
          id: businessPlan.id.toString(),
          slug: businessPlan.slug,
        },
      };
    }),
    fallback: false,
  };
}
