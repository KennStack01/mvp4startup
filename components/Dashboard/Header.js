import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import { CgMenuCheese, CgClose } from "react-icons/cg";
import UserAuthButtons from "./UserAuthButtons";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const router = useRouter();

  return (
    // <header className="sticky top-0 z-50 w-full text-back-color-600 bg-white shadow-sm p-2">
    <header className="relative w-full text-back-color-600 bg-white shadow-sm p-2">
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

        <div className="hidden lg:flex flex-row text-xs font-bold">
          <UserAuthButtons />
        </div>

        <div
          className={
            mobileMenuIsOpen
              ? "absolute z-20 mt-10 flex flex-col lg:hidden bg-white mx-auto w-full py-3 px-2 text-sm"
              : "hidden"
          }
        >
          <UserAuthButtons />
        </div>
      </div>
    </header>
  );
}
