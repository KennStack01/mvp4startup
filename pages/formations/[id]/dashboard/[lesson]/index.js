import React from "react";
import Head from "next/head";
import CourseChapters from "../../../../../components/Dashboard/CourseChapters";
import { courseDetails } from "../../../../../data/coursesDetails";
import Layout from "../../../../../components/Dashboard/Layout";

const Lesson = () => {
  const videoID = "https://www.youtube.com/watch?v=__IL2nMzUEw".replace(
    "https://www.youtube.com/watch?v=",
    ""
  );
  const embedURL = `https://www.youtube.com/embed/${videoID}`;

  return (
    <div>
      <Head>
        <title>Dashboard - MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <div className="flex flex-row mx-auto">
          <CourseChapters />
          <div className="flex flex-col w-80 md:w-4/5">
            <h1 className="font-semibold text-md my-2 mx-auto">
              {" "}
              0. JavaScript for Beginners 1
            </h1>
            <iframe
              width="100%"
              height="100%"
              src={embedURL}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Titre du Cours"
              className="sticky top-0 rounded-md min-h-screen mx-auto"
            />
            <div>
              <h1 className="font-semibold text-center text-md my-5 text-xs uppercase px-5 py-3 rounded-sm block leading-normal bg-light-pink-600 text-white">
                Discussion
              </h1>
              {courseDetails[0].content[0].reviewpros.map((review, index) => (
                <div
                  key={index}
                  className="flex flex-row mx-auto justify-center my-8"
                >
                  <img
                    src={review.userAvatar}
                    alt="Avatar Image"
                    className="my-auto h-16 w-16 p-1 rounded-full bg-white"
                  />
                  <div className="flex flex-col mx-3 md:mx-4 my-auto md:w-2/3 bg-gray-100 p-2 rounded">
                    <h4 className="text-xs font-semibold mb-1">Yves Somda</h4>
                    <p className="text-xs text-gray-800"> {review.comment} </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Lesson;
