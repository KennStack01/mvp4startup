import React, { useState } from "react";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube, BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="divide-y divide-white text-white bg-back-color-600 py-2 md:py-5 px-2 md:px-20 w-full">
      <div className="flex flex-col mx-auto justify-items-center ">
        <div className="grid grid-cols-2 place-content-center mx-auto md:mx-0 md:flex flex-row justify-between text-sm">
          <div className="flex flex-col my-2">
            <h1 className="text-md md:text-xl font-semibold my-1 md:my-3">
              Company
            </h1>
            <div className="flex flex-col">
              <Link href="/">
                <a className="hover:bg-back-color-500 p-1 rounded">About us</a>
              </Link>
              <Link href="/">
                <a className="hover:bg-back-color-500 p-1 rounded">
                  Contact us
                </a>
              </Link>
              <Link href="/">
                <a className="hover:bg-back-color-500 p-1 rounded">Blog</a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col my-2">
            <h1 className="text-md md:text-xl font-semibold my-1 md:my-3">
              Learn
            </h1>
            <div className="flex flex-col">
              <Link href="/">
                <a className="hover:bg-back-color-500 p-1 rounded">Projects</a>
              </Link>
              <Link href="/">
                <a className="hover:bg-back-color-500 p-1 rounded">
                  Formations
                </a>
              </Link>
              <Link href="/">
                <a className="hover:bg-back-color-500 p-1 rounded">
                  Business Plan
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col my-2">
            <h1 className="text-md md:text-xl font-semibold my-1 md:my-3">
              Support
            </h1>
            <div className="flex flex-col">
              <Link href="/">
                <a className="hover:bg-back-color-500 p-1 rounded">Pricing</a>
              </Link>
              <Link href="/">
                <a className="hover:bg-back-color-500 p-1 rounded">
                  Témoignages
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col my-2">
            <h1 className="text-md md:text-xl font-semibold my-1 md:my-3">
              Légal
            </h1>
            <div className="flex flex-col">
              <Link href="/">
                <a className="hover:underline p-1 rounded">
                  Politique de confidentialité
                </a>
              </Link>
              <Link href="/">
                <a className="hover:underline p-1 rounded">
                  Conditions d’utilisation
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between my-5 text-md">
          <div className="flex flex-row">
            <a
              href="https://www.linkedin.com/in/kennkibadi/"
              target="__blank"
              className="mx-1"
            >
              <div className="text-xl lg:text-2xl my-auto">
                <BsFacebook />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/kennkibadi/"
              target="__blank"
              className="mx-1"
            >
              <div className="text-xl lg:text-2xl my-auto">
                <BsInstagram />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/kennkibadi/"
              target="__blank"
              className="mx-1"
            >
              <div className="text-xl lg:text-2xl my-auto">
                <BsYoutube />
              </div>
            </a>
          </div>
          <div onClick={() => setDarkMode(!darkMode)}>
            {!darkMode ? (
              <div className="flex flex-row justify-between text-sm cursor-pointer hover:bg-back-color-500 p-2 rounded">
                <FaMoon className="my-auto mx-2" />
                <h3 className="my-auto"> Dark mode</h3>
              </div>
            ) : (
              <div className="flex flex-row justify-between text-sm cursor-pointer hover:bg-back-color-500 p-2 rounded">
                <BsSunFill className="my-auto mx-2" />
                <h3 className="my-auto"> Light mode</h3>
              </div>
            )}
          </div>
        </div>
        <div className="mt-4">
          <p className="mx-auto mt-2 md:mt-5 w-4/5 text-center text-xs md:text-md my-auto">
            © 2021 MVP4Startup, LLC. All rights reserved.{" "}
            {/* <div className="flex flex-row">
              <span className="hidden md:block"> Built by </span>
              <a
                href="https://www.webcontract.io"
                target="__blank"
                className="hover:text-yellow-400 font-semibold hidden md:block"
              >
                {" "}
                WebContract.io
              </a>{" "}
            </div> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
