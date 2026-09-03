import React, { useState, useEffect } from "react";
import Link from "next/link";
import cn from "../../utils/classnames";

import Text from "../../primitives/Text";
import Logo from "../../public/assets/illustrations/logo.svg";

const MENU_LINKS = [
  { href: "/", label: "Home" },
  { href: "/mdma-psykedelika", label: "MDMA og Psykedelika" },
  { href: "/projects", label: "Prosjekter" },
  {
    href: "https://portal.smartorg.no/action/reg/a62dfb78",
    label: "Bli medlem",
    external: true,
  },
  { href: "/support", label: "Støtt oss" },
  { href: "/about", label: "Om oss" },
];

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
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="header__logo"
        >
          <Logo />
        </Link>
        <button className="header__menu-button" onClick={() => setOpen(!open)}>
          {open ? "Lukk" : "Meny"}
        </button>
      </div>
      <div className="header__menu">
        <nav className="header__menu-page-links">
          {MENU_LINKS.map(({ href, label, external }, index) => {
            // Drives the staggered entry animation in Header.css.
            const style = { "--item-order": index + 1 };

            return external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="header__menu-page-link"
                style={style}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className="header__menu-page-link"
                style={style}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div>
          <Text tag="p" variant="body">
            Psynapse er et nettverk som jobber for å skape anerkjennelse og
            forståelse for bruk av psykedelika og MDMA, både i rekreasjonelle,
            seremonielle eller terapeutiske former.
          </Text>
          <hr />
          <div className="header__subscribe-wrapper">
            <div className="header__circle-animation">
              {[...new Array(3)].map((test, index) => (
                <svg
                  key={index}
                  width="90"
                  height="91"
                  viewBox="0 0 90 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M66.9933 6.98997L45.1057 1.03637L23.218 6.98997L7.18845 23.2624L1.31878 45.5L7.18846 67.7377L23.2181 84.0101L45.1057 89.9637L66.9933 84.0101L83.0229 67.7377L88.8926 45.5L83.0229 23.2624L66.9933 6.98997Z"
                    stroke="var(--color-white)"
                    strokeWidth="2"
                  />
                </svg>
              ))}
            </div>
            <div>
              <Text tag="p" variant="body">
                En holdningsendring er nødvendig for å skape et åpent og bevisst
                samfunn. Få siste nytt rett i innboksen din.
              </Text>
              <form
                action="https://emmasofia.us13.list-manage.com/subscribe/post?u=d738f7fcdd8533e9b2fc684a8&amp;id=e22eb01ef0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
                noValidate
                className="validate"
                data-np-checked="1"
              >
                <div id="mc_embed_signup_scroll">
                  <input
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                    placeholder="Din epostadresse"
                    required
                    className="header__subscribe-input"
                    data-np-checked="1"
                  />
                  <input
                    type="submit"
                    value="Meld meg på"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="header__subscribe-button"
                    data-np-checked="1"
                  />

                  <input
                    type="text"
                    name="b_d738f7fcdd8533e9b2fc684a8_e22eb01ef0"
                    tabIndex="-1"
                    hidden
                    data-np-checked="1"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
