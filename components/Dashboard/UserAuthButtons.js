import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const UserAuthButtons = () => {
  const router = useRouter();
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
