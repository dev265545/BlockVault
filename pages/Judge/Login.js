"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import DoubleNavbar from "../../Components/DoubleNavbar";

function Login() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    console.log("dd");
    e.preventDefault();

    const data = {
      Email: email,

      Password: password,
    };

    axios
      .post("/api/Judge/findJudge", data)
      .then((response) => {
        console.log(response.data);

        setEmail("");

        setPassword("");
        const judgeId = response.data.judge.id;

        router.push(`/Judge/${judgeId}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Column (Login Form) */}
      <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 p-6 flex items-center justify-center">
        <div className="max-w-md w-full">
          <h2 className="text-xl font-semibold mb-4 font-sans text-white ">
            Welcome back
          </h2>
          <div className="grid grid-cols-2 gap-10">
            <button className="w-full mb-4 p-2  border text-white rounded-md hover:bg-red-700">
              Sign in with Google
            </button>
            <button className="w-full mb-4 p-2 bg-black text-white rounded-md hover:bg-gray-900">
              Sign in with Apple
            </button>
          </div>
          <div className="mb-4 text-sm text-center relative">
            <span className="absolute left-0 border-2 top-1/2 transform -translate-y-1/2 w-[200px] border-t border-gray-300 dark:border-white"></span>
            <span className="px-2 text-white ">or</span>
            <span className="absolute right-0 top-1/2 border-2 transform -translate-y-1/2 w-[200px] border-t border-gray-300 dark:border-white"></span>
          </div>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-700 dark:text-white"
              >
                Email
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-medium text-gray-700 dark:text-white"
              >
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring focus:border-blue-500"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-gray-700 dark:text-white">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Sign in to your account
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-700 dark:text-white">
              Dont have an account?{" "}
              <Link
                href="/Judge/SignUp"
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Column (Description) */}
      <div className="md:w-1/2 bg-gray-700 p-6 flex items-center justify-center">
        {/* <ul class="circles ">
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
        </ul> */}
        <div className="max-w-md mx-auto ">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Website Description
          </h2>
          <p className="text-gray-200">
            This is a description of the website. You can add any information
            you want to provide to your users.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
