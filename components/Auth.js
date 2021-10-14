import { useState } from "react";
// import { supabase } from "../utils/supabaseClient";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaGithub } from "react-icons/fa";

export default function Auth() {
  //   const [loading, setLoading] = useState(false);

  //   const handleLoading = () => {
  //     setLoading(!loading);
  //   };

  //   const handleLogin = async () => {
  //     try {
  //       setLoading(true);
  //       const { user, session, error } = await supabase.auth.signIn({
  //         provider: "github",
  //       });
  //       notify();
  //     } catch (error) {
  //       console.log(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <div className="md:flex flex-row my-4 md:my-6 mx-auto p-4">
      <div className="items-center mx-auto justify-center rounded-lg py-5 px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="my-3 text-center text-lg font-semibold text-gray-600">
            Accéder maintenant
          </h1>
          <div className="grid grid-cols-1 divide-y divide-gray-400">
            <div className="flex flex-col mb-2">
              {/* Github */}
              <button
                //   onClick={handleLogin}
                className="bg-white outline-none shadow-sm hover:shadow-lg mx-auto px-10 font-semibold py-2 my-3 rounded-lg"
                style={{ background: "#211F1F" }}
              >
                <div className="flex flex-row text-white">
                  <FaGithub className="my-auto text-3xl" />
                  <h3 className=" text-md font-medium my-auto mx-2">
                    Continuer avec Github
                  </h3>
                </div>
              </button>

              {/* Google */}
              <button className="bg-white outline-none shadow-sm hover:shadow-lg mx-auto px-10 font-semibold py-2 my-3 rounded-lg">
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

              {/* Twitter */}
              <button
                className="bg-white outline-none shadow-sm hover:shadow-lg mx-auto px-10 font-semibold py-2 my-3 rounded-lg"
                style={{ background: "#1DA1F2" }}
              >
                <div className="flex flex-row text-white ">
                  <FaTwitter className="my-auto text-3xl" />
                  <h3 className="text-md font-medium my-auto mx-2">
                    Continuer avec Twitter{" "}
                    {/* <span className="text-xs italic text-black bg-gray-300 px-1 rounded">
                        soon
                    </span> */}
                  </h3>
                </div>
              </button>
            </div>
            <form className="w-full max-w-sm">
              <div className="md:flex md:items-center mb-2 mt-10">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-full-name"
                  >
                    Full Name
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    value="Jane Doe"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-password"
                  >
                    Password
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3"></div>
                <label className="md:w-2/3 block text-gray-500 font-bold">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <span className="text-sm">Send me your newsletter!</span>
                </label>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button
                    className="shadow bg-light-pink-500 hover:bg-light-pink-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    Se Connecter
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
