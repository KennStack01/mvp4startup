import React from "react";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import Moment from "react-moment";
import "moment/locale/fr";

Moment.globalLocale = "fr";
const BlogALaUne = ({ image, title, description, slug, date }) => {
  const dateToFormat = date;

  return (
    <div className="flex flex-col md:flex-row justify-between mx-auto my-8 md:my-12 md:w-4/6">
      <img src={image} alt={title} className="bg-cover rounded-lg md:w-1/2" />
      <div className="flex flex-col justify-between md:w-1/2 md:mx-4">
        <p className="text-xs text-gray-600 text-left">
          {" "}
          <Moment format="DD MMMM YYYY" className="capitalize font-semibold">
            {dateToFormat}
          </Moment>
        </p>
        <Link href={`/blog/${slug}`}>
          <a>
            <h1 className="text-xl md:text-3xl font-bold hover:text-light-pink-500">
              {" "}
              {title}{" "}
            </h1>
          </a>
        </Link>
        <div className="flex flex-col">
          <p className="text-sm"> {description.substring(0, 700)}... </p>
          <Link
            href={`/blog/${slug}`}
            onMouseOver={() => setShowLire(true)}
            onMouseOut={() => setShowLire(false)}
          >
            <a className="flex flex-row justify-end text-right -mt-5 md:mt-1 hover:underline">
              <p className="my-auto font-semibold">Lire</p>
              <BsArrowRightShort className="text-xl my-auto" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogALaUne;
