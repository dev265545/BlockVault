import React, { useContext, useState } from "react";
import { AgreementContext } from "../Context/AgreementProvider.js";
import Image from "next/image";
// import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
// import logout from "./logout.png";
import Header from "../Components/Header";
import bg from "../public/contract.svg";
// import ReactTyped from "react-typed";
import Typewriter from "../Components/TypeWriter";
import next from "next";
import Wallet from "../Components/Wallet.jsx";
const Landing = () => {
  const arr = [1, 2, 3];
  const [data, setData] = useState({ desc: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    createAgreement(data);
  };
  const handleChange = async (e) => {
    setData((prev) => {
      console.log(e.target.value);
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { currentAccount, connectWallet, createAgreement } =
    useContext(AgreementContext);

  return (
    <>
      {/* <Header /> */}
      <div className="relative ">
        {/* <Header /> */}
        <div className="fixed top-0 left-0">
          <svg
            id="visual"
            viewBox="0 0 960 540"
            width="full"
            height="1000px"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <rect x="0" y="0" width="960" height="540" fill="#F5F5DC"></rect>
            <path
              d="M0 104L40 98.5C80 93 160 82 240 97.3C320 112.7 400 154.3 480 164.7C560 175 640 154 720 138.5C800 123 880 113 920 108L960 103L960 0L920 0C880 0 800 0 720 0C640 0 560 0 480 0C400 0 320 0 240 0C160 0 80 0 40 0L0 0Z"
              fill="#ADD8E6"
              strokeLinecap="round"
              strokeLinejoin="miter"
            ></path>
          </svg>
        </div>

        <div className="absolute w-full text-[#182235] h-auto top-0 left-0 pt-[5rem] text-center jusitfy-center">
          {/* <div></div> */}
          <div className="contain">
            <div className="plate-container">
              <Image alt="SD" className="plate" src={bg} />
            </div>

            <div className="text-container">
              <h1 className="title">Poshblock</h1>
              <div>
                <Typewriter
                  text="Welcome to our revolutionary document upload platform! Say goodbye to worries about document security and accessibility. With our cutting-edge technology, you can now upload your important documents onto the blockchain, ensuring the highest level of security and immutability. Our user-friendly interface makes the process seamless and hassle-free, allowing you to store, manage, and share your documents with confidence. Join us in embracing the future of document management, where security meets simplicity. Experience the power of blockchain and take control of your valuable files today."
                  delay={1}
                />
              </div>
              <Wallet
                currentAccount={currentAccount}
                connectWallet={connectWallet}
              />
              {/* <div>
                {!currentAccount ? (
                  <button
                    onClick={() => connectWallet()}
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-400 hover:bg-red-700 focus:shadow-outline focus:outling-none background"
                    title="Connect your Metamask wallet"
                  >
                    Connect Wallet
                  </button>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outling-none background"
                    title="Connect your Metamask wallet"
                  >
                    Connected
                  </button>
                )}
              </div> */}
              {/* <div>
                <ReactTyped
                  strings={[
                    "Typ Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga corporis ipsam laudantium architecto dolore maiores adipisci! Quam, cum ab, voluptas ipsa illo expedita fugiatreprehenderit in, modi adipisci mollitia.",
                  ]}
                  typeSpeed={2}
                  loop={false}
                />
              </div> */}
              {
                //   !currentUser &&
                <div className="flex flex-row">
                  {/* <Link
                    to={"/signup1"}
                    class="hover:bg-[#398ca8] transition duration-200 text-gray-800 bg-[#ADD8E6] font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  >
                    Sign up now
                  </Link>
                  <Link
                    to={"/login"}
                    class="hover:underline hover:text-gray-900 transition duration-200 text-gray-500 font-semibold py-2 px-4"
                  >
                    Sign in
                  </Link> */}
                </div>
              }
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="desc" onChange={handleChange} />
            <button type="submit">Submit</button>
          </form>
          <Footer />
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Landing;
