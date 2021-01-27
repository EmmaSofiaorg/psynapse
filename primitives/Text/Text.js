import React from "react";
import cn from "../../utils/classnames";
import "./Text.css";

export default function Text({
  tag = "div",
  weight,
  variant,
  noMargin,
  html,
  children,
  bold,
}) {
  const classNames = cn({
    text: true,
    [`text--${variant}`]: variant,
    "text--no-margin": noMargin,
    "text--bold": bold,
    [`text--${weight}`]: weight,
  });

  return React.createElement(
    tag,
    {
      className: classNames,
      dangerouslySetInnerHTML: html ? { __html: children } : null,
    },
    html ? null : children
  );
}
