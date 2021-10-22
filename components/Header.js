import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import { CgMenuCheese, CgClose } from "react-icons/cg";
import UserAuthButtons from "./userAuthButtons";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full text-back-color-600 bg-white shadow-sm p-2">
      <div className="flex flex-row justify-between mx-2 md:mx-4">
        <div className="flex items-center">
          <Link href="/">
            <a className="flex flex-row text-md font-bold">
              {/* Logo */}
              <h4 className="text-white text-center bg-light-pink-500 rounded-full h-10 w-10 pt-2">
                MVP
              </h4>
              <h4 className="mt-2">4STARTUP</h4>
            </a>
          </Link>
        </div>

        <button
          className="items-center block px-3 py-2 my-auto  border rounded lg:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          {mobileMenuIsOpen ? <CgClose /> : <CgMenuCheese />}
        </button>

        <div className="my-auto hidden lg:flex flex-row justify-between">
          <ul
            className={cn(
              // "sm:grid grid-cols-2 my-auto md:mt-2 z-10 hidden lg:flex lg:flex-row lg:items-center md:justify-center text-sm w-full md:w-auto",
              "flex flex-row items-center justify-center text-xs mt-2"
              // mobileMenuIsOpen ? `block` : `hidden`
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
                } mt-3 md:mt-0 md:ml-6 font-bold hover:bg-gray-100 p-2 my-2 mx-1 rounded`}
                key={title}
              >
                <Link href={route}>
                  <a className="block">{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex flex-row text-xs font-bold">
          <UserAuthButtons />
          {/* <Link href="/login">
            <a // onClick={openModal}
              className={`${
                router.pathname == "/login" ? "active underline" : ""
              } md:mx-2 mx-auto my-auto cursor-pointer hover:bg-gray-100 p-2 rounded`}
            >
              SE CONNECTER
            </a>
          </Link>
          <Link href="/signup">
            <a className="bg-light-pink-500 hover:bg-light-pink-400 p-2 text-white rounded-md my-auto">
              S'INSCRIRE
            </a>
          </Link> */}
        </div>

        <div
          className={
            mobileMenuIsOpen
              ? "absolute z-20 mt-10 flex flex-col lg:hidden bg-white mx-auto w-full py-3 px-2 text-sm"
              : "hidden"
          }
        >
          <ul
            className={
              mobileMenuIsOpen
                ? `grid grid-cols-2 place-content-center`
                : `hidden`
            }
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
                } mt-3 md:mt-0 md:ml-6 font-bold hover:bg-gray-100 p-2 my-2 mx-1 rounded`}
                key={title}
              >
                <Link href={route}>
                  <a className="block">{title}</a>
                </Link>
              </li>
            ))}
          </ul>
          <UserAuthButtons />
        </div>
      </div>
    </header>
  );
}
