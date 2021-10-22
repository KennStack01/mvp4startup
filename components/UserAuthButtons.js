import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

const UserAuthButtons = () => {
  const router = useRouter();

  const { data: session } = useSession();

  if (session) {
    return (
      <div className="mx-auto flex flex-row text-xs font-bold">
        <div className="flex flex-row">
          <img
            className="h-8 w-8 rounded-full my-auto mx-2 lg:mt-2"
            src={session.user.image}
            alt="Workflow"
          />
        </div>
        <h3 className="my-auto">{session.user.name}</h3>
        <button
          className="md:mx-2 mx-3 bg-gray-200 hover:bg-gray-400 font-semibold p-2 text-gray-900 rounded-md my-auto"
          onClick={() => signOut()}
        >
          Se Déconnecter
        </button>
      </div>
    );
  }
  return (
    <div className="mx-auto flex flex-row text-xs font-bold">
      <Link href="/login">
        <a // onClick={openModal}
          className={`${
            router.pathname == "/login" ? "active underline" : ""
          } md:mx-2 mx-3 my-auto cursor-pointer hover:bg-gray-100 p-2 rounded`}
        >
          SE CONNECTER
        </a>
      </Link>
      <Link href="/signup">
        <a className="md:mx-2 mx-3 bg-light-pink-500 hover:bg-light-pink-400 p-2 text-white rounded-md my-auto">
          S'INSCRIRE
        </a>
      </Link>
    </div>
  );
};

export default UserAuthButtons;
