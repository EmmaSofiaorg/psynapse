import React from "react";
import cn from "../../utils/classnames";
import Link from "next/link";
import "./ProjectList.css";
import SimpleCircle from "../../public/assets/illustrations/simple-circle.svg";

import Text from "../../primitives/Text";
import Container from "../../primitives/Container";

export default function ProjectList({ heading, ingress, body, items = [] }) {
  return (
    <div className="project-list">
      <Container>
        <div className="project-list__description">
          <Text variant="label">{heading}</Text>
          <Text tag="h2" variant="heading-sm">
            {ingress}
          </Text>
          <Text variant="body">{body}</Text>
        </div>
      </Container>
      <ol className="project-list__items">
        {items.map((item, i) => {
          const classNames = cn({
            "project-list-item": true,
            "project-list-item--external": !item.readMore,
          });

          const href = item.readMore
            ? `/projects/${item.slug}`
            : item.url || "";

          return (
            <li className={classNames} key={i}>
              <Link href={href}>
                <a
                  target={item.readMore ? "" : "_blank"}
                  className="project-list-item__wrapper"
                >
                  <div className="project-list-item__counter">
                    <SimpleCircle />
                  </div>
                  <h2 className="project-list-item__title">{item.heading}</h2>
                  <p className="project-list-item__text">{item.ingress}</p>
                  <div className="project-list-item__arrow"></div>
                </a>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
