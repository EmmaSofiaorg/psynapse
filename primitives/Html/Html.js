import React from "react";
import cn from "../../utils/classnames";
import "./Html.css";

export default function Html({ children }) {
  const classNames = cn({
    html: true,
  });

  return (
    <div
      className={classNames}
      dangerouslySetInnerHTML={{ __html: children }}
    ></div>
  );
}
