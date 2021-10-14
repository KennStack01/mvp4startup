import Link from "next/link";
import { useState, Fragment } from "react";
import cn from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../public/logo.png";
import { CgMenuCheese, CgClose } from "react-icons/cg";

import { Dialog, Transition } from "@headlessui/react";
import Auth from "./Auth";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const router = useRouter();

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <header className="flex flex-row justify-between md:sticky top-0 z-50 w-full bg-white text-back-color-600 mt-2 md:mt-5">
      <div className="flex flex-wrap items-center justify-between w-full lg:container py-1 px-3 md:flex-row ">
        <div className="flex items-center">
          <Link href="/">
            <a className="flex flex-row text-lg font-bold ml-3">
              {/* <Image
                src={logo}
                width={100}
                height={40}
                priority
                alt="MVP4Startup Logo"
              /> */}
              <h4 className="text-white text-center bg-light-pink-500 rounded-full h-12 w-12 pt-3">
                MVP
              </h4>
              <h4 className="mt-3">4STARTUP</h4>
            </a>
          </Link>
        </div>

        <button
          className="flex items-center block px-3 py-2  border rounded md:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          {mobileMenuIsOpen ? <CgClose /> : <CgMenuCheese />}
          {/* <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg> */}
        </button>

        <ul
          className={cn(
            "grid grid-cols-2 my-auto z-10 md:flex md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {[
            { title: "ACCUEIL", route: "/" },
            { title: "PROJETS", route: "/projects" },
            { title: "BUSINESS PLAN", route: "/businessplan" },
            { title: "FORUM", route: "/forum" },
            { title: "BLOG", route: "/blog" },
          ].map(({ route, title }) => (
            <li
              className={`${
                router.pathname == route
                  ? "active bg-light-pink-500 hover:text-gray-900 hover:bg-light-pink-500 text-white"
                  : ""
              } mt-3 md:mt-0 md:ml-6 font-bold hover:bg-gray-100 p-2 my-2 mx-5 md:mx-3 rounded`}
              key={title}
            >
              <Link href={route}>
                <a className="block">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={cn(
            "grid grid-cols-2 place-content-center mx-20 md:mx-2 md:flex md:flex-row md:items-center md:justify-center text-sm font-bold  w-full md:w-auto my-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          <h4
            onClick={openModal}
            className="md:mx-2 mx-auto my-auto cursor-pointer"
          >
            CONNECT
          </h4>
          <h4 className="text-white mx-auto bg-light-pink-500 p-2 w-auto rounded-md">
            S'INSCRIRE
          </h4>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 backdrop-filter backdrop-blur-sm" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block z-50 w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-50 shadow-xl rounded-2xl">
                <Auth />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </header>
  );
}
