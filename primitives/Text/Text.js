import React from "react";
import cn from "../../utils/classnames";
import "./Text.css";

export default function Text({ tag, variant, noMargin, children }) {
  const classNames = cn({
    text: true,
    [`text--${variant}`]: variant,
    "text--no-margin": noMargin,
  });

  switch (tag) {
    case "h1":
      return <h1 className={classNames}>{children}</h1>;
    case "h2":
      return <h2 className={classNames}>{children}</h2>;
    case "h3":
      return <h3 className={classNames}>{children}</h3>;
    case "h4":
      return <h4 className={classNames}>{children}</h4>;
    case "h5":
      return <h5 className={classNames}>{children}</h5>;
    case "h6":
      return <h6 className={classNames}>{children}</h6>;
    case "p":
      return <p className={classNames}>{children}</p>;
    case "span":
      return <span className={classNames}>{children}</span>;
    case "div":
      return <div className={classNames}>{children}</div>;
    default:
      return <span className={classNames}>{children}</span>;
  }
}
