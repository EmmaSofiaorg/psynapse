import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default function BaseLayout({ children, contactInfo }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff8a01" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer contactInfo={contactInfo} />
    </>
  );
}
