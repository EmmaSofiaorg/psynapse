import React from "react";
import cn from "../../utils/classnames";
import Link from "next/link";
import isInternalHref from "../../utils/isInternalHref";
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

          const inner = (
            <>
              <div className="project-list-item__counter">
                <SimpleCircle />
              </div>
              <h2 className="project-list-item__title">{item.headingShort}</h2>
              <div className="project-list-item__arrow"></div>
            </>
          );

          return (
            <li className={classNames} key={i}>
              {isInternalHref(href) ? (
                <Link href={href} className="project-list-item__wrapper">
                  {inner}
                </Link>
              ) : (
                <a
                  href={href || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-list-item__wrapper"
                >
                  {inner}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
