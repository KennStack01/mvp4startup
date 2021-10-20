import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import { CgMenuCheese, CgClose } from "react-icons/cg";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const router = useRouter();

  return (
    // <header className="flex flex-row justify-between md:sticky top-0 z-50 w-full text-back-color-600 mt-2 md:mt-5 bg-white">
    <header className="flex flex-between lg:hidden sticky top-0 z-50 w-full text-back-color-600 bg-white pt-2 pb-1">
      {/* <div className="flex flex-wrap items-center justify-between w-full lg:container py-1 px-3 md:flex-row "> */}
      <div className="flex flex-row justify-between">
        <div className="flex items-center mx-4 md:mx-8">
          <Link href="/">
            <a className="flex flex-row text-lg font-bold ml-3">
              {/* Logo */}
              <h4 className="text-white text-center bg-light-pink-500 rounded-full h-12 w-12 pt-3">
                MVP
              </h4>
              <h4 className="mt-3">4STARTUP</h4>
            </a>
          </Link>
        </div>

        <button
          className="items-center block px-3 py-2 border rounded"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          {mobileMenuIsOpen ? <CgClose /> : <CgMenuCheese />}
        </button>
      </div>
    </header>
  );
}
