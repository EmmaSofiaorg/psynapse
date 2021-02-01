import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSubscription } from "../lib/api";
import { useQuerySubscription } from "react-datocms";

export default function BaseLayout({ children, contactInfo }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer contactInfo={contactInfo} />
    </>
  );
}
