import React from "react";
import BlogCollabImage from "-!svg-react-loader!../../public/svg/blogCollabImage.svg";
import Link from "next/link";

const BlogAnnonce = () => {
  return (
    <div className="flex flex-col md:flex-row my-14 md:my-20 mx-2 md:mx-5 text-dark-pink-800 bg-back-pink-500 p-5 rounded-lg">
      <div className="my-auto md:w-1/2">
        <BlogCollabImage style={{ width: "90%", height: "inherit" }} />
      </div>
      <div className="my-auto md:w-1/2 flex flex-col">
        <h5 className="italic text-sm md:text-md">
          Meilleure communauté d’entrepreneurs. Nous sommes là pour vous aider.
          Vous avez essayé d’apprendre à coder seul mais vous n’y arrivez pas.
          Vous avez des idées de projet dans le domaine du IT mais vous ne savez
          pas coder alors n’hésitez prenez une de nos formations vous permettra
          de maitriser clairement la conception de votre produit en le codant
          vous-même ou vous aider à parler le même langage que vos dévéloppeurs.
        </h5>
        <div className="bg-light-pink-500 hover:bg-light-pink-600 mx-auto my-2 md:my-5 p-2 text-white font-semibold rounded-lg">
          <Link href="/forum">
            <a className="">
              <h5 className="mx-auto md:my-auto "> Voir Blog </h5>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogAnnonce;
