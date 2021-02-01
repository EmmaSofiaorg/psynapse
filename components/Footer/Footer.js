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
            <Link href="https://www.facebook.com/psynapse" postfix="↗">
              Facebook
            </Link>
          </li>
          <li>
            <Link href="https://www.mailchimp.com/psynapse" postfix="↗">
              Nyhetsbrev
            </Link>
          </li>
          <li>
            <Link href="https://goo.gl/maps/W7VrmCcuR2ym9i8X9" postfix="↗">
              c/o Jørn Kløvfjell Mjelva, Jens Bjelkes gate 82E
            </Link>
          </li>
        </ul>
        <div className="footer__logo">
          <Logo />
        </div>
      </div>
    </footer>
  );
}
