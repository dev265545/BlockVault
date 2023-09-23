"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import WalletModal from "../../Components/WalletModal";
import DoubleNavbar from "../../Components/DoubleNavbar";
import { ethers } from "ethers";
import Contract from "../../artifacts/contracts/Contract.sol/Contract.json";
function Login() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(true);
  const [walletOpen, setWalletOpen] = useState(false);
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [contract2, setContract2] = useState(null);
  const [reg, setReg] = useState(false);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  // const [provider, setProvider] = useState(null);
  // const [account, setAccount] = useState(null);
  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      setProvider(provider);
      setAccount(account);
    } else {
      alert("Please install MetaMask to use this feature");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          setAccount(null);
        }
      });
    }
  }, []);

  useEffect(() => {
    console.log(account);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const wallet = async () => {
      if (provider) {
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        console.log(address);
        setAccount(address);

        // const contractAddress = "0xda07bd614c978c0adea69aa14ce672709205469a";
        // const contract = new ethers.Contract(
        //   contractAddress,
        //   Upload.abi,
        //   signer
        // );
        const profile = new ethers.Contract(
          "0x165D3581bb2d1B4486Ee84aaBF9aA1F84d7b5AFf",
          Contract.abi,
          signer
        );

        console.log(profile);
        // setContract(contract);
        setContract2(profile);
        setProvider(signer);
      } else {
        alert("Metamask not installed");
      }
    };

    provider && wallet();
  }, []);
  const handleSubmit = (e) => {
    console.log("dd");
    e.preventDefault();

    const data = {
      Id: email,

      Password: password,
    };

    axios
      .post("/api/Court/Login", data)
      .then((response) => {
        console.log(response.data);

        setEmail("");

        setPassword("");
        const judgeId = response.data.Court.id;

        router.push(`/Court/${judgeId}/Upload`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {/* <DoubleNavbar /> */}
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left Column (Login Form) */}
        <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 p-6 flex items-center justify-center">
          <div className="max-w-md w-full">
            <h2 className="text-5xl items-center justify-center font-semibold mb-4 font-sans text-white ">
              Welcome back
            </h2>
            <div className="grid grid-cols-1 py-10 gap-10">
              {/* <button className="w-full mb-4 p-2  border text-white rounded-md hover:bg-red-700">
                Connect to Wallet
              </button> */}
              {/* <button className="w-full mb-4 p-2 bg-black text-white rounded-md hover:bg-gray-900">
              Sign in with Apple
            </button> */}
            </div>
            {/* <div className="mb-4 text-sm text-center relative  ">
              <span className="absolute left-0 border-2 top-1/2 transform -translate-y-1/2 w-[200px] border-t border-gray-300 dark:border-white"></span>
              <span className="px-2 text-lg text-white ">or</span> */}
            {/* <span className="absolute left-0 border-2 top-1/2 transform -translate-y-1/2 w-[200px] border-t border-gray-300 dark:border-white"></span> */}
            {/* <span className="absolute right-0 top-1/2 border-2 transform -translate-y-1/2 w-[200px] border-t border-gray-300 dark:border-white"></span>
            </div> */}

            <form className="space-y-4 p-3">
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700 dark:text-white"
                >
                  Unique Court Identification Number
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring focus:border-blue-500"
                  placeholder=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block font-medium text-gray-700 dark:text-white"
                >
                  Unique Court Identification Secrect Key
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
                {/* <label className="flex items-center text-gray-700 dark:text-white">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a> */}
              </div>
              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Login in to the Court Dashboard
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-gray-700 dark:text-white">
                {/* Dont have an account?{" "} */}
                {/* <Link
                href="/Judge/SignUp"
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </Link> */}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (Description) */}
        <div className="md:w-1/2 bg-gradient-to-r from-cyan-500  to-green-700  p-6 flex items-center justify-center">
          {/* <ul class="circles  -z-50 ">
          
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
          <div className="max-w-md mx-auto  ">
            <h2 className="text-5xl font-semibold mb-4 text-white">
              Courts Section
            </h2>
            <p className="text-gray-200">
              Login to the official Courts of India with the provided username
              and password to upload and manage court case documents
            </p>
          </div>
        </div>
        {modal && (
          <div className="flex items-center justify-center">
            <div
              id="defaultModal"
              tabIndex="-1"
              aria-hidden="true"
              className="fixed inset-0 z-50 flex items-center justify-center"
            >
              <div class="relative w-full max-w-2xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                      Terms of Service
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="defaultModal"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>

                  <div class="p-6 space-y-6">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply.
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      The European Union’s General Data Protection Regulation
                      (G.D.P.R.) goes into effect on May 25 and is meant to
                      ensure a common set of data rights in the European Union.
                      It requires organizations to notify users as soon as
                      possible of high-risk data breaches that could personally
                      affect them.
                    </p>
                  </div>

                  <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="defaultModal"
                      type="button"
                      onClick={() => {
                        setModal(false);
                      }}
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      I accept
                    </button>
                    {/* <button
                  data-modal-hide="defaultModal"
                  type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Decline
                </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div style={{ position: "fixed", top: 0, right: 0, margin: "1rem" }}>
          <button
            onClick={() => {
              connectWallet();
            }}
            type="button"
            data-modal-target="crypto-modal"
            data-modal-toggle="crypto-modal"
            class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              class="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              ></path>
            </svg>
            Connect wallet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
