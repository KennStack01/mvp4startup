import React, { useState } from "react";
import Blog from "./Blog";

const BlogsList = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // console.log(posts);

  return (
    <div className="flex flex-col">
      <div className="mx-auto w-3/4 lg:w-1/2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={`Entrez et Recherchez automatiquement l'article`}
          className="px-3 py-2 sticky top-0 placeholder-gray-400 text-blueGray-600 bg-white rounded-sm text-sm outline-none focus:outline-none focus:ring-2 ring-1 ring-gray-400 focus:ring-helloblue-400 w-full"
        />
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 place-content-center md:mx-auto">
        {posts
          .filter((post) => {
            if (searchTerm === "") {
              return post;
            } else if (
              post.title
                .toLowerCase()
                .includes(searchTerm.toString().toLowerCase().trim())
              // ||
              // post.author
              //   .toLowerCase()
              //   .includes(searchTerm.toString().toLowerCase().trim())
            ) {
              return post;
            }
          })
          .map((post) => (
            <Blog
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
    </div>
  );
};

export default BlogsList;
