import React, { useState, useEffect } from "react";
import cn from "../../utils/classnames";
import "./Header.css";
import Logo from "../../public/assets/illustrations/logo.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "visible";
  }, [open]);

  const classNames = cn({
    header: true,
    "header--open": open,
  });

  return (
    <header className={classNames}>
      <div className="header__wrapper">
        <div className="header__logo">
          <Logo />
        </div>
        <button className="header__menu-button" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Meny"}
        </button>
      </div>
      <div className="header__menu">
        <nav className="header__menu-page-links">
          <a className="header__menu-page-link" style={{ "--item-order": 1 }}>
            Home
          </a>
          <a className="header__menu-page-link" style={{ "--item-order": 2 }}>
            Rusreform
          </a>
          <a className="header__menu-page-link" style={{ "--item-order": 3 }}>
            Psykedelika og MDMA
          </a>
          <a className="header__menu-page-link" style={{ "--item-order": 4 }}>
            Støtt oss
          </a>
          <a className="header__menu-page-link" style={{ "--item-order": 5 }}>
            Om oss
          </a>
        </nav>
        <div>
          <input className="" />
          <p>
            Psynapse er et nettverk som jobber for å skape anerkjennelse og
            forståelse for bruk av psykedelika og MDMA, både i rekreasjonelle,
            seremonielle eller terapeutiske former.
          </p>
          <hr />
          <div>
            En holdningsendring er nødvendig for å skape et åpent og bevisst
            samfunn. Få siste nytt rett i innboksen din.
          </div>
        </div>
      </div>
    </header>
  );
}
