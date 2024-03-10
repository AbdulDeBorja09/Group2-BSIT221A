import "@/styles/globals.css";
import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/navbar";
import Link from "next/link";
import Footer from "./components/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
