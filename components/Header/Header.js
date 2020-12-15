import React from "react";
import "./Header.css";
import Logo from "../../public/assets/illustrations/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__menu">Menu</div>
      </div>
    </header>
  );
}
