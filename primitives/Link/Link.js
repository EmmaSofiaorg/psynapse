import React from "react";
import NextLink from "next/link";
import cn from "../../utils/classnames";
import isInternalHref from "../../utils/isInternalHref";

export default function Link({
  href = "",
  postfix = null,
  prefix = null,
  full = false,
  children,
  style,
  target,
}) {
  const classNames = cn({
    link: true,
    "link--full": full,
  });

  const content = (
    <>
      {prefix && <span className="link__prefix">{prefix}</span>}
      <span className="link__el">{children}</span>
      {postfix && <span className="link__postfix">{postfix}</span>}
    </>
  );

  if (!isInternalHref(href)) {
    return (
      <a
        href={href || undefined}
        style={style}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classNames}
      >
        {content}
      </a>
    );
  }

  return (
    <NextLink href={href} style={style} target={target} className={classNames}>
      {content}
    </NextLink>
  );
}
