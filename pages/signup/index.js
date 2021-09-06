import React from 'react';
import AuthLayout from '../../layouts/AuthLayout'


const SignUp = () => {
    return (
        <AuthLayout>
            <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
                <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                        <h2 className="mt-6 text-3xl font-bold text-gray-900">
                            Devenir client
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">Crée un compte et devenir client</p>
                    </div>
                    <form className="mt-8 space-y-6">
                        <input type="hidden" name="remember" value="true" />
                        <div className="relative">
                            <div className="absolute right-3 mt-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            </div>
                            <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Prénom</label>
                            <input
                                className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                type="text" placeholder="Mohammed" />
                            <div className="mt-8 content-center">
                                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Nom</label>
                                <input
                                    className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                    type="text" placeholder="Ahmad" />
                            </div>
                            <div className="mt-8 content-center">
                                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                                <input
                                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                    type="email" placeholder="mail@gmail.com" />
                            </div>
                        </div>
                        <div className="mt-8 content-center">
                            <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                Mot de passe
                            </label>
                            <input
                                className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                                type="password" placeholder="Enter your password" />
                        </div>
                        <div className="mt-8 content-center">
                            <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                Confirmer le mot de passe
                            </label>
                            <input
                                className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                                type="password" placeholder="Enter your password" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember_me" name="remember_me" type="checkbox"
                                    className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Accepter de resevoir des e-mails
                                </label>
                            </div>
                        </div>
                        <div>
                            <button type="submit"
                                className="w-full main-btn">
                                S'enregistrer
                            </button>
                        </div>
                        <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                            <span>Vous n'avez déja un compte ?</span>
                            <a href="#"
                                className="text-blue-500 ml-2">S'identifier</a>
                        </p>
                    </form>
                </div>
            </div>
        </AuthLayout>
    );
};


export default SignUp;
