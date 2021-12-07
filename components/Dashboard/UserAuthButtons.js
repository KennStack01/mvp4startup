import React, { Fragment } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUserEdit, FaGraduationCap } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserAuthButtons = () => {
  return (
    <Menu as="div" className="relative inline-block text-left z-50 w-auto">
      <div>
        <Menu.Button className="inline-flex w-full p-2 rounded-xl text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <h3 className="my-auto mx-2 font-semibold">Yves Somda </h3>
          <BsThreeDotsVertical
            className="mx-auto my-auto text-3xl hover:bg-gray-300 p-1 rounded-2xl"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-800 text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  <Link href="/account">
                    <a className="flex flex-row">
                      {active ? (
                        <FaUserEdit
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <FaUserEdit
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}
                      <h4>Mon Compte</h4>
                    </a>
                  </Link>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-800 text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  <Link href="/account/mesCours">
                    <a className="flex flex-row">
                      {active ? (
                        <FaGraduationCap
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <FaGraduationCap
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}
                      <h4>Mes Cours</h4>
                    </a>
                  </Link>
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-800 text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {active ? (
                    <HiOutlineLogout
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                  ) : (
                    <HiOutlineLogout
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                  )}
                  Se Déconnecter
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserAuthButtons;
