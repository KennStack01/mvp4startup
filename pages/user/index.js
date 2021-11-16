import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import NewsLetter from "../../components/Home/NewsLetter";
import { FiLogIn } from "react-icons/fi";

export default function User({ user = false }) {
  if (!user) {
    return (
      <div>
        <Head>
          <title>Connectez-vous | MVP4Startup</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <Layout>
          <h1 className="text-3xl font-bold my-10 text-gray-700 text-center mx-auto">
            {" "}
            Veuillez vous connecter pour continuer{" "}
          </h1>
          <Link href="/login">
            <a className="flex flex-row mx-8 md:w-1/4 md:mx-auto justify-evenly text-white bg-gray-800 hover:text-pink-400 font-bold py-2 md:py-3 md:px-4 px-2 text-sm md:text-xl rounded-md">
              <h2 className="my-auto">Connectez-vous {` `}</h2>
              <FiLogIn className="text-3xl my-auto" />
            </a>
          </Link>
        </Layout>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Accueil | MVP4Startup</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <h1 className="text-3xl font-bold text-gray-700 text-center mx-auto">
          {" "}
          Bienvenu à Vous, Ceci est la Page Protégée{" "}
        </h1>
        <NewsLetter />
      </Layout>
    </div>
  );
}
