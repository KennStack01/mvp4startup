import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";

export default function Auth() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  // Données à envoyer dans le Backend: result
  // C'est composé de Username and Password

  // Function pour Authentification via les réseaux sociaux
  const handleSocialAuth = (e) => {
    e.preventDefault();
    console.log("Social Auth");
  };

  return (
    <div className="md:flex flex-row my-4 md:my-6 mx-auto p-4">
      <div className="items-center mx-auto justify-center rounded-lg py-5 px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="my-3 text-center text-lg md:text-3xl font-semibold text-gray-700">
            Se Connecter
          </h1>
          <p>{result}</p>
          <div className="grid grid-cols-1 divide-y divide-gray-400">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-sm mb-5"
            >
              <div className="md:flex md:items-center mb-2 mt-5">
                <div className="w-full">
                  <input
                    {...register("userName")}
                    className="bg-gray-200 appearance-none border-2 my-auto border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-back-color-500"
                    id="inline-full-name"
                    type="text"
                    // value=""
                    placeholder="Nom d'utilisateur"
                    required
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="w-full">
                  <input
                    {...register("password")}
                    className="bg-gray-200 appearance-none border-2 my-auto border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-back-color-500"
                    id="inline-password"
                    type="password"
                    placeholder="******************"
                    required
                  />
                </div>
              </div>

              <div className="md:flex">
                <div className="flex flex-row justify-items-center">
                  <button
                    className="shadow bg-light-pink-500 hover:bg-light-pink-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Se Connecter
                  </button>
                  <Link href="/signup">
                    <a className="md:mx-2 mx-auto text-sm my-auto cursor-pointer hover:bg-gray-100 p-1 rounded">
                      Créer un Compte
                    </a>
                  </Link>
                </div>
              </div>
            </form>
            <div className="flex flex-col mb-2">
              {/* Google */}
              <button
                onClick={handleSocialAuth}
                className="bg-white outline-none shadow-sm hover:shadow-lg mx-auto px-10 font-semibold py-2 my-3 rounded-lg"
              >
                <div className="flex flex-row ">
                  <FcGoogle className="my-auto text-3xl" />
                  <h3 className="text-gray-800 text-md font-medium my-auto mx-2">
                    Continuer avec Google{" "}
                    {/* <span className="text-xs italic text-black bg-gray-300 px-1 rounded">
                        soon
                    </span> */}
                  </h3>
                </div>
              </button>

              {/* Facebook */}
              <button
                onClick={handleSocialAuth}
                className="bg-white outline-none shadow-sm hover:shadow-lg mx-auto px-10 font-semibold py-2 my-3 rounded-lg"
                style={{ background: "#3b5998" }}
              >
                <div className="flex flex-row text-white ">
                  <BsFacebook className="my-auto text-3xl" />
                  <h3 className="text-md font-medium my-auto mx-2">
                    Continuer avec Facebook{" "}
                    {/* <span className="text-xs italic text-black bg-gray-300 px-1 rounded">
                        soon
                    </span> */}
                  </h3>
                </div>
              </button>

              {/* Github */}
              <button
                onClick={handleSocialAuth}
                className="bg-white outline-none shadow-sm hover:shadow-lg mx-auto px-10 font-semibold py-2 my-3 mt-4 rounded-lg"
                style={{ background: "#211F1F" }}
              >
                <div className="flex flex-row text-white">
                  <FaGithub className="my-auto text-3xl" />
                  <h3 className=" text-md font-medium my-auto mx-2">
                    Continuer avec Github
                  </h3>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
