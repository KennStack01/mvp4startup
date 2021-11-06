import { useState } from "react";
import Layout from "../../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import BlogContent from "../../../components/Blog/BlogContent";
import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);

const BlogArticle = ({ blogArticles }) => {
  // console.log(blogArticles);

  return (
    <div>
      <Head>
        <title> {blogArticles[0].title} | MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <div className="flex flex-col">
          {blogArticles.map((blogArticle) => {
            return (
              <BlogContent
                key={blogArticle.slug}
                title={blogArticle.title}
                image={blogArticle.blogCoverImage.url}
                date={blogArticle.date}
                author={blogArticle.author}
                mainContent={blogArticle.mainContent.markdown}
                slug={blogArticle.slug}
              />
            );
          })}
        </div>
      </Layout>
    </div>
  );
};

export default BlogArticle;

export async function getStaticProps({ params }) {
  const { blogArticles } = await graphcms.request(
    `
    query MyQuery($slug: String!) {
      blogArticles(where: { slug: $slug }) {
        title
        blogCoverImage {
          url
        }
        date
        author
        shortDescription
        slug
        mainContent {
          markdown
        }
      }
    }

  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      blogArticles,
    },
  };
}

export async function getStaticPaths() {
  const { blogArticles } = await graphcms.request(`
     query {
        blogArticles {
            slug
        }
    }
  `);

  return {
    paths: blogArticles.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
