// components/DoubleNavbar.js

import { useRouter } from "next/router";
import React from "react";

const DoubleNavbar = () => {
  const router = useRouter()
  return (
    <div className="">
      <div className="bg-gradient-to-r from-orange-500 via-white to-green-700 h-5"></div>
      <div className=" bg-black h-16 flex justify-center items-center px-6">
        <div className="flex items-center">
          <div className="flex ">
            <p className="text-3xl font-bold justify-center items-center text-white">
              <span className="  text-green-700 ">Block</span>Vault
            </p>
          </div>
        </div>
        <div className="right flex items-center">
          {/* <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-green-700">
                Whats Next
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-700">
                LogIn
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-700">
                SignUp
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-green-700">
                Post a Job
              </a>
            </li>
          </ul> */}
        </div>
      </div>
      <div className="bottom_nav bg-gray-200 h-12 flex  items-end justify-end px-10">
        <div className=" flex py-2 gap-8 ">
          <button class="box-border relative z-30 h-9 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
            <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span class="relative z-20 flex items-center text-sm">
              <svg
                class="relative w-5 h-5 mr-2 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              Wallet
            </span>
          </button>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 "
          >
            Logout
          </button>
        </div>
        {/* <ul className="flex space-x-12">
          <li>
          
            <a href="#" className="text-gray-700 uppercase text-sm">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 uppercase text-sm">
              Profile
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 uppercase text-sm">
              Writing
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 uppercase text-sm">
              Design
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 uppercase text-sm">
              Marketing
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 uppercase text-sm">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 uppercase text-sm">
              Map
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 uppercase text-sm">
              Articles
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default DoubleNavbar;
