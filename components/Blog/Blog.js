import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Blog = ({ image, title, description, slug, date }) => {
  return (
    <div className="flex flex-col justify-between mx-auto my-8 md:w-5/6">
      <img src={image} alt={title} className="bg-cover rounded-lg" />
      <p className="text-xs text-gray-600 text-left"> {date} </p>
      <Link href={`/blog/${slug}`}>
        <a>
          <h1 className="text-xl md:text-2xl font-bold hover:text-light-pink-600">
            {" "}
            {title}{" "}
          </h1>
        </a>
      </Link>
      <div className="flex flex-col">
        <p className="text-sm"> {description.substring(0, 100)}... </p>
        <Link href={`/blog/${slug}`}>
          <a>
            <BsArrowRight className="text-2xl" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
