import Head from "next/head";
import BlogsList from "../../components/Blog/BlogsList";
import Layout from "../../components/Layout";
import { GraphQLClient } from "graphql-request";
import BlogALaUne from "../../components/Blog/BlogALaUne";

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

export default function Blog({ blogArticles, latestArticle }) {
  return (
    <div>
      <Head>
        <title>Blog | MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <div className="flex flex-col text-gray-800">
          <h1 className="font-bold text-center text-4xl md:text-6xl">
            Le Blog
          </h1>
          <p className="text-center text-md md:text-md mx-auto my-7 md:w-1/2">
            Every code that you write needs design. The amount of time you will
            spend creating the software design depends on the complexity of the
            system and your familiarity with the system.
          </p>
        </div>
        <div>
          {latestArticle.map((post) => (
            <BlogALaUne
              key={post.slug}
              title={post.title}
              image={post.blogCoverImage.url}
              date={post.date}
              author={post.author}
              description={post.shortDescription}
              slug={post.slug}
            />
          ))}
        </div>
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
        blogArticles(orderBy: date_DESC) {
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

  const { blogArticles: latestArticle } = await graphcms.request(
    `
    query {
      blogArticles(orderBy: date_DESC, first: 1) {
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
      latestArticle,
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
