import React, { useState, useEffect } from "react";
import Link from "next/link";
import cn from "../../utils/classnames";
import "./Header.css";

import Text from "../../primitives/Text";
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
        <Link href="/">
          <a onClick={() => setOpen(false)} className="header__logo">
            <Logo />
          </a>
        </Link>
        <button className="header__menu-button" onClick={() => setOpen(!open)}>
          {open ? "Lukk" : "Meny"}
        </button>
      </div>
      <div className="header__menu">
        <nav className="header__menu-page-links">
          <Link href="/">
            <a
              className="header__menu-page-link"
              onClick={() => setOpen(!open)}
              style={{ "--item-order": 1 }}
            >
              Home
            </a>
          </Link>
          <Link href="/projects">
            <a
              className="header__menu-page-link"
              onClick={() => setOpen(!open)}
              style={{ "--item-order": 2 }}
            >
              Prosjekter
            </a>
          </Link>
          <Link href="/">
            <a
              className="header__menu-page-link"
              onClick={() => setOpen(!open)}
              style={{ "--item-order": 4 }}
            >
              Støtt oss
            </a>
          </Link>
          <Link href="/about">
            <a
              className="header__menu-page-link"
              onClick={() => setOpen(!open)}
              style={{ "--item-order": 5 }}
            >
              Om oss
            </a>
          </Link>
        </nav>
        <div>
          <Text tag="p" variant="body">
            Psynapse er et nettverk som jobber for å skape anerkjennelse og
            forståelse for bruk av psykedelika og MDMA, både i rekreasjonelle,
            seremonielle eller terapeutiske former.
          </Text>
          <hr />
          <div className="header__subscribe-wrapper">
            <div></div>
            <div>
              <Text tag="p" variant="body">
                En holdningsendring er nødvendig for å skape et åpent og bevisst
                samfunn. Få siste nytt rett i innboksen din.
              </Text>
              <input
                className="header__subscribe-input"
                placeholder="Din epost"
                type="email"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
