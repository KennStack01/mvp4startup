import React from "react";
import { BiMailSend } from "react-icons/bi";

const NewsLetter = () => {
  return (
    <div className="mx-auto my-6 md:my-8">
      <form
        className="flex flex-col"
        method="post"
        action={`https://getform.io/f/e2419428-661a-4a22-acb4-d246cf183799`}
      >
        <div className="flex flex-col mx-auto">
          <label
            className="mb-2 font-bold text-sm md:text-lg text-gray-800"
            htmlFor="email"
          >
            Souscrire à la Newsletter
          </label>
        </div>
        <div className="flex flex-row mx-auto my-auto">
          <input
            className="p-2 md:py-2 md:px-3 md:mx-2 text-sm w-52 md:w-64 rounded-sm text-gray-800 border focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50"
            type="email"
            name="email"
            id="email"
            placeholder="contact@mvp4startup.com"
            required
          />
          <button
            type="submit"
            className="flex flex-row mx-2 justify-evenly text-white bg-gray-800 hover:text-pink-400 font-bold py-2 md:py-3 md:px-6 px-2 text-sm md:text-xl rounded-md"
          >
            <h2 className="my-auto">S'abonner {` `}</h2>
            <BiMailSend className="text-3xl my-auto" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
