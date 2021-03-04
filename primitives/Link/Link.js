import React from "react";
import NextLink from "next/link";
import cn from "../../utils/classnames";
import "./Link.css";

export default function Link({
  href = "",
  postfix = null,
  prefix = null,
  full = false,
  children,
  style,
}) {
  const classNames = cn({
    link: true,
    "link--full": full,
  });

  return (
    <NextLink href={href}>
      <a style={style} className={classNames}>
        {prefix && <span className="link__prefix">{prefix}</span>}
        <span className="link__el">{children}</span>
        {postfix && <span className="link__postfix">{postfix}</span>}
      </a>
    </NextLink>
  );
}
