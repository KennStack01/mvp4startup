import React from "react";
import Blog from "./Blog";

const BlogsList = ({ posts }) => {
  console.log(posts);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col text-gray-800">
        <h1 className="font-bold text-center text-4xl md:text-6xl">Le Blog</h1>
        <p className="text-center text-md md:text-md mx-auto my-7 md:w-1/2">
          Every code that you write needs design. The amount of time you will
          spend creating the software design depends on the complexity of the
          system and your familiarity with the system.
        </p>
      </div>
      <div className="flex flex-col md:grid grid-cols-3 place-content-center">
        {posts?.map((post) => (
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
