import React, { useState } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { SignIn } from "../../store/Actions/users";

const Login = () => {
  let [user , setUser] = useState({email: '' , password: ''})

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(user);

    dispatch(SignIn(user));
  };

  return (
    <AuthLayout>
      <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Content de te revoir!
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Connectez-vous à votre compte s'il vous plaît
            </p>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input type="hidden" name="remember" value="true" />
            <div className="relative">
              <div className="absolute right-3 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                Email
              </label>
              <input
                className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                type="email"
                placeholder="mail@gmail.com"
                onChange={(e) => {
                  user.email = e.target.value;
                }}
              />
            </div>
            <div className="mt-8 content-center">
              <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                Mot de passe
              </label>
              <input
                className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="Enter your password"
                onChange={(e) => {
                  user.password = e.target.value;
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Souviens de moi
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-blue-500">
                  Mot de passe oublié?
                </a>
              </div>
            </div>
            <div>
              <button type="submit" className="w-full main-btn">
                S'identifier
              </button>
            </div>
            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>Vous n'avez pas de compte?</span>
              <a href="#" className="text-blue-500 ml-2">
                S'enregistrer
              </a>
            </p>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
