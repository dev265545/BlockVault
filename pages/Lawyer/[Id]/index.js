"use client";
import React, { useEffect, useState } from "react";
import DoubleNavbar from "../../../Components/DoubleNavbar";
import legalbg from "../../../public/legal-court-bg.jpg";
import Image from "next/image";
import Footer from "../../../Components/Footer";
import { useRouter } from "next/router";

import FileUpload from "../../../Components/FileUpload";
import { ethers } from "ethers";
import Contract from "../../../artifacts/contracts/Contract.sol/Contract.json";
import Moralis from "moralis";
function LawyerDashboard() {
  const router = useRouter();
  const { Id } = router.query;
  console.log();
  const [data, setData] = useState();
  // const dataX = async () => {
  //   try {
  //     const d = await contract2.getLawyerCases(Id);
  //     setData(d);
  //     console.log(d);
  //   } catch (error) {}
  // };
  // dataX();

  const [contract2, setContract2] = useState(null);
  const [account, setAccount] = useState(null);
  const [reg, setReg] = useState(false);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [file, setFile] = useState();
  const [DocLink, setDocLink] = useState();
  useEffect(() => {
    const data = async () => {
      try {
        const d = await contract2.getLawyerCases(String(Id));
        setData(d);
        console.log(d);
      } catch (error) {}
    };
    data();
  }, [Id, account]);

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
  return (
    <div className="bg-gray-900 min-h-screen">
      <DoubleNavbar />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
        <div className="text-white font-bold  text-4xl p-5 mb-12">
          All Your Cases
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                CNR
              </th>
              <th scope="col" className="px-6 py-3">
                Doc Link
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.cnr}
                  </td>
                  <td className="px-6 py-4">
                    <a href={item.docLink}>Link</a>
                  </td>
                  <td className="px-6 py-4">{item.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}

export default LawyerDashboard;
