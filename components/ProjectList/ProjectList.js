import React from "react";
import cn from "../../utils/classnames";
import "./ProjectList.css";

import Text from "../../primitives/Text";

export default function ProjectList({ items = [] }) {
  return (
    <ol className="project-list">
      {items.map((item, i) => (
        <li className="project-list-item" key={i}>
          <a href={item.to} className="project-list-item__wrapper">
            <div className="project-list-item__counter">{i + 1}</div>
            <h2 className="project-list-item__title">{item.heading}</h2>
            <p className="project-list-item__text">{item.text}</p>
            <div className="project-list-item__arrow"></div>
          </a>
        </li>
      ))}
    </ol>
  );
}
