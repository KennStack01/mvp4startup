import React from "react";
import Head from "next/head";
import Layout from "../../../components/Layout";
import CourseChapters from "../../../components/Dashboard/CourseChapters";

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>Dashboard - MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <CourseChapters />
        <div className="flex flex-row mx-auto"></div>
      </Layout>
    </div>
  );
};

export default Dashboard;
