import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

const UserForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div className="grid grid-cols-1 divide-y divide-gray-400">
      <form className="w-full max-w-sm mb-5">
        <div className="md:flex md:items-center mb-2 mt-5">
          <div className="w-full">
            <input
              {...register("username")}
              className="bg-gray-200 appearance-none border-2 my-auto border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-back-color-500"
              id="inline-email"
              type="text"
              // value=""
              placeholder="Nom d'utilisateur"
              required
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-2">
          <div className="w-full">
            <input
              {...register("password")}
              className="bg-gray-200 appearance-none border-2 my-auto border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-back-color-500"
              id="inline-repeated-password"
              type="password"
              placeholder="Mot de passe"
              required
            />
            <p className="text-xs text-red-600 text-light">
              {errors.password?.message}
            </p>
          </div>
        </div>
        <div className="md:flex md:items-center mb-2">
          <div className="w-full">
            <input
              {...register("password_confirmation")}
              className="bg-gray-200 appearance-none border-2 my-auto border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-back-color-500"
              id="inline-password"
              type="password"
              placeholder="Répéter Mot de passe"
              required
            />
            <p className="text-xs text-red-600 text-light">
              {errors.password?.message}
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex flex-row justify-items-center">
            <button
              className={`shadow ${
                false
                  ? ""
                  : "bg-light-pink-500 hover:bg-light-pink-400 text-white focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded"
              }`}
              type="submit"
            >
              {" "}
              Valider{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
