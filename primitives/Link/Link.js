import React from "react";
import cn from "../../utils/classnames";
import "./Link.css";

export default function Link({ to, postfix = null, prefix = null, children }) {
  const classNames = cn({
    link: true,
  });

  return (
    <a className={classNames} href={to}>
      {prefix && <span className="link__prefix">{prefix}</span>}
      <span className="link__el">{children}</span>
      {postfix && <span className="link__postfix">{postfix}</span>}
    </a>
  );
}
