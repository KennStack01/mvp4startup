import Head from "next/head";
import BlogsList from "../../components/Blog/BlogsList";
import Layout from "../../components/Layout";
import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

export default function Blog({ blogArticles }) {
  return (
    <div>
      <Head>
        <title>Blog | MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <BlogsList posts={blogArticles} />
      </Layout>
    </div>
  );
}

// export async function getStaticProps({ params }) {
export async function getStaticProps() {
  const { blogArticles } = await graphcms.request(
    `
    query {
        blogArticles {
            title
            blogCoverImage {
                url
            }
            date
            author
            shortDescription
            slug
        }
    }

  `
    // {
    //   slug: params.slug,
    // }
  );

  return {
    props: {
      blogArticles,
    },
  };
}

// export async function getStaticPaths() {
//   const { blogArticles } = await graphcms.request(`
//      query {
//         blogArticles {
//             slug
//         }
//     }
//   `);

//   return {
//     paths: blogArticles.map(({ slug }) => ({
//       params: { slug },
//     })),
//     fallback: false,
//   };
// }
