import React from 'react'
import Link from "next/link";

function MobileMenu(props) {
    return (
        <div className="absolute z-50 w-screen top-0 inset-0 p-1 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <h3>MC</h3>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>

                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {props.categories.map((categorie) => {
                  return (
                    <Link href="#" key={categorie.id}>
                      <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {categorie.title}
                        </span>
                      </a>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {props.mobileMenu.map((link) => {
                return (
                  <Link href="#" key={link.id}>
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      {link.title}
                    </a>
                  </Link>
                );
              })}
            </div>
            <div>
              <a
                href="#"
                className="w-full main-btn"
              >
                S'inscrire
              </a>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Vous êtes déjà client?
                <a href="#" className="text-blue-600 ml-2">
                  S'identifier
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MobileMenu
