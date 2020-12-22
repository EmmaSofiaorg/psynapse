import React from "react";
import "./Footer.css";
import Link from "../../primitives/Link";
import Logo from "../../public/assets/illustrations/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <ul className="footer__links">
          <li>
            <Link postfix="↗">Halla</Link>
          </li>
          <li>
            <Link postfix="↗">Halla</Link>
          </li>
        </ul>
        <div>
          <Logo />
        </div>
      </div>
    </footer>
  );
}
