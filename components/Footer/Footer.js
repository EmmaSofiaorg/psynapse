import React from "react";
import "./Footer.css";
import Link from "../../primitives/Link";
import Logo from "../../public/assets/illustrations/logo.svg";

export default function Footer({ contactInfo }) {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <ul className="footer__links">
          <li>
            <Link
              target="_blank"
              style={{ "--postfix-color": "currentColor" }}
              href={contactInfo.facebookUrl}
              postfix="↗"
            >
              Facebook
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              style={{ "--postfix-color": "currentColor" }}
              href={`https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=914740045`}
              postfix="↗"
            >
              Org.no: {contactInfo.orgNo}
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              style={{ "--postfix-color": "currentColor" }}
              href={`mailto:${contactInfo.email}`}
              postfix="↗"
            >
              {contactInfo.email}
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              style={{ "--postfix-color": "currentColor" }}
              href={contactInfo.addressUrl}
              postfix="↗"
            >
              {contactInfo.address}
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
