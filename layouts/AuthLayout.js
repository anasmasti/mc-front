import React from 'react';
import authLayoutStyle from '../styles/layouts/AuthLayout.module.scss'

const AuthLayout = ({ children }) => {
    return (
        <section className={[authLayoutStyle.auth_section, "relative flex"].join(' ')}>
            <div className="flex sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                <div className={["sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-gradient-to-r from-indigo-500 to-blue-600 text-white bg-no-repeat bg-cover relative"].join(' ')}>
                    <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
                    <div className="w-full  max-w-md z-10">
                        <h1 className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Reference site about Lorem Ipsum..</h1>
                        <div className="sm:text-sm xl:text-md text-gray-200 font-normal"> What is Lorem Ipsum Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it
                            has?</div>
                    </div>
                    <ul className={[authLayoutStyle.circles].join(' ')}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
               <> 
                {children}
               </>
            </div>
        </section>
    );
};


export default AuthLayout;
