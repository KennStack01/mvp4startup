import React from "react";
import Head from "next/head";
import CourseChapters from "../../../../components/Dashboard/CourseChapters";
import Layout from "../../../../components/Dashboard/Layout";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Dashboard - MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <CourseChapters />
      </Layout>
    </div>
  );
};

export default Index;
