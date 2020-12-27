import React from "react";
import cn from "../../utils/classnames";
import "./Text.css";

export default function Text({
  tag,
  weight,
  variant,
  noMargin,
  html,
  children,
}) {
  const classNames = cn({
    text: true,
    [`text--${variant}`]: variant,
    "text--no-margin": noMargin,
    [`text--${weight}`]: weight,
  });

  switch (tag) {
    case "h1":
      return (
        <h1
          className={classNames}
          dangerouslySetInnerHTML={html ? { __html: children } : null}
        >
          {html ? null : children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={classNames}
          dangerouslySetInnerHTML={html ? { __html: children } : null}
        >
          {html ? null : children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={classNames}
          dangerouslySetInnerHTML={html ? { __html: children } : null}
        >
          {html ? null : children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={classNames}
          dangerouslySetInnerHTML={html ? { __html: children } : null}
        >
          {html ? null : children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={classNames}
          dangerouslySetInnerHTML={html ? { __html: children } : null}
        >
          {html ? null : children}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={classNames}
          dangerouslySetInnerHTML={html ? { __html: children } : null}
        >
          {html ? null : children}
        </h6>
      );
    case "p":
      return (
        <p
          className={classNames}
          dangerouslySetInnerHTML={html ? { __html: children } : null}
        >
          {html ? null : children}
        </p>
      );
    case "span":
      return (
        <span
          className={classNames}
          dangerouslySetInnerHTML={html ? { __html: children } : null}
        >
          {html ? null : children}
        </span>
      );
    case "div":
      return (
        <div
          className={classNames}
          dangerouslySetInnerHTML={html ? { __html: children } : null}
        >
          {html ? null : children}
        </div>
      );
    default:
      return (
        <span
          className={classNames}
          dangerouslySetInnerHTML={html ? { __html: children } : null}
        >
          {html ? null : children}
        </span>
      );
  }
}
