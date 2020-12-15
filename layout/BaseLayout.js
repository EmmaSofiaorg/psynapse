import React from "react";
import Header from "../components/Header";

export default function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
