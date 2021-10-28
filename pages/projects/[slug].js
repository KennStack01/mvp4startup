import Head from "next/head";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Projects({ title }) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const router = useRouter();
  const { slug } = router.query;

  // let URL = "http://localhost:4000/home/index_projects";
  // let URL = "http://localhost:3002/projects";

  const { data, error } = useSWR(
    // `https://localhost:3002/projects/${slug}`,
    `https://localhost:3002/projects/${slug}`,
    fetcher
  );

  if (error)
    return (
      <Layout>
        <div className="text-gray-800 font-semibold text-center mx-auto text-xl md:text-2xl mt-8">
          I failed to fetch the data 😓
        </div>
      </Layout>
    );
  if (!data)
    return (
      <Layout>
        <div className="text-gray-800 font-semibold text-center mx-auto text-xl md:text-2xl mt-8">
          Loading the data... 😅
        </div>
      </Layout>
    );

  if (data) console.log(data);

  return (
    <div>
      <Head>
        <title> {title} | MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        {error ? <div>failed to load</div> : ""}
        {!data ? <div>loading...</div> : ""}
        {data ? (
          <div>
            <h1 className="text-gray-800 text-center mx-auto text-3xl">
              {data.title}
            </h1>
          </div>
        ) : (
          ""
        )}
      </Layout>
    </div>
  );
}
