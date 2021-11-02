import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Blog = ({ image, title, description, slug, date }) => {
  return (
    <div className="flex flex-col justify-between 1/5">
      <div className="h-1/4 flex flex-col">
        <img src={image} alt={title} className="bg-cover rounded-lg" />
        <p className="text-xs text-gray-600 text-left"> {date} </p>
      </div>
      <h1 className="text-xl md:text-2xl font-bold hover:text-light-pink-600 text-justify h-1/4">
        {" "}
        {title}{" "}
      </h1>
      <div className="flex flex-col h-2/4">
        <p className="text-sm"> {description} </p>
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
