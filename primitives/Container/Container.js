import React from "react";
import cn from "../../utils/classnames";
import "./Container.css";

export default function Container({ className, width = "xl", full, children }) {
  const classNames = cn({
    container: true,
    [className]: className,
    "container--full": full,
    [`container--${width}`]: width,
  });

  return (
    <div className={classNames}>
      <div className="container__wrapper">{children}</div>
    </div>
  );
}
