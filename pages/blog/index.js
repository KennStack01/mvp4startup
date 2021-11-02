import Head from "next/head";
import BlogsList from "../../components/Blog/BlogsList";
import Layout from "../../components/Layout";
import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

export async function getStaticProps({ params }) {
  const { posts } = await graphcms.request(
    `query {
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
    }`,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      posts: posts || null,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(`

  query {
        blogArticles {
            slug
        }
    }`);

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export default function Blog({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog | MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <BlogsList posts={posts} />
      </Layout>
    </div>
  );
}
