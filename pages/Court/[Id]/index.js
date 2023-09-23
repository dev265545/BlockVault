import React from "react";
import DoubleNavbar from "../../../Components/DoubleNavbar";
import legalbg from "../../../public/legal-court-bg.jpg";
import Image from "next/image";
import Footer from "../../../Components/Footer";
import { useRouter } from "next/router";
function CourtDashboard() {
  const router = useRouter();
  const { Id } = router.query;
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* <DoubleNavbar /> */}
      <div className="flex bg-gray-900 ">
        <div className="flex-1 grid grid-cols-2">
          <div className="p-12">
            <div
              onClick={() => {
                router.push(`/Court/${Id}/Upload`);
              }}
              className="zigzag  w-72 rounded-3xl shadow-zinc-400 shadow-2xl h-48 "
            ></div>
          </div>
          <div className="p-12">
            <div className="zigzag  w-72 rounded-3xl shadow-zinc-400 shadow-2xl h-48 "></div>
          </div>
        </div>

        <Image
          src={legalbg}
          width={700}
          height={700}
          className=" object-cover  rounded-full p-10"
          alt="legal-bg"
        />
      </div>
      <Footer />
    </div>
  );
}

export default CourtDashboard;
