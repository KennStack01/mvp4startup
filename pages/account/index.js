import React from "react";
import Head from "next/head";
import CourseChapters from "../../components/Dashboard/CourseChapters";
import { courseDetails } from "../../data/coursesDetails";
import Layout from "../../components/Dashboard/Layout";
import UserForm from "../../components/Dashboard/UserForm";

const Menu = () => {
  return (
    <div>
      <Head>
        <title>Mon Compte - MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <div className="flex md:flex-row justify-center mx-auto">
          <div className="flex flex-col">
            <h1 className="my-3 text-center text-lg md:text-3xl font-semibold text-gray-700">
              Changer vos informations
            </h1>
            <UserForm />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Menu;
