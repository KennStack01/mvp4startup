import React from "react";
import Moment from "react-moment";
import "moment/locale/fr";
import { RichText } from "@graphcms/rich-text-react-renderer";

Moment.globalLocale = "fr";

const BlogContent = ({ title, image, author, date, mainContent }) => {
  const dateToFormat = date;

  return (
    <div className=".blogContent flex flex-col justify-between mx-auto md:mx-auto my-8 w-full">
      <h1 className="text-3xl md:text-5xl md:w-3/4 mx-auto text-center font-bold text-gray-800 hover:text-light-pink-500 my-4 md:mb-6 md:mt-2">
        {" "}
        {title}{" "}
      </h1>
      <img
        src={image}
        alt={title}
        className="bg-cover rounded-lg md:w-3/4 mx-auto"
      />
      <div className="flex flex-row justify-center text-md text-gray-600 font-medium">
        <p className="text-xs text-left my-auto">
          {"Date:  "}
          <Moment format="DD MMMM YYYY" className="capitalize">
            {dateToFormat}
          </Moment>
        </p>
        <span className="mx-4"> {" | "} </span>
        <p className="my-auto text-xs"> Auteur: {author} </p>
      </div>
      <div className="mx-auto text-justify my-8 md:my-10 md:mx-32">
        <RichText
          content={mainContent}
          renderers={{
            h1: ({ children }) => <h1 className="text-white">{children}</h1>,
            bold: ({ children }) => <strong>{children}</strong>,
          }}
          className="text-gray-800 text-sm mx-2"
        />
        {/* <p className="text-gray-800 text-sm"> {mainContent} </p> */}
      </div>
    </div>
  );
};

export default BlogContent;
