// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { AgreementProvider } from "../Context/AgreementProvider.js";
import Landing from "./Home.js";
export default function Home() {
  return (
    <AgreementProvider>
      <Landing />
    </AgreementProvider>
  );
}
