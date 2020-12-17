import React from "react";
import cn from "../../utils/classnames";
import "./Section.css";
import CircleGrid from "../../public/assets/illustrations/circle-grid.svg";

import Text from "../../primitives/Text";
import Link from "../../primitives/Link";

const Illustration = {
  "circle-grid": <CircleGrid />,
};

export default function Section({
  variant,
  illustration,
  label,
  heading,
  body,
  links = [],
  children,
}) {
  const classNames = cn({
    section: true,
    [`section--${variant}`]: variant,
  });

  return (
    <section className={classNames}>
      <div className="section__wrapper">
        <div className="section__image">
          <div className="section__image-wrapper">
            {Illustration[illustration]}
          </div>
        </div>
        <div className="section__text">
          <Text tag="div" variant="label">
            {label}
          </Text>
          <Text tag="h2" variant="heading-sm">
            {heading}
          </Text>
          {links.map((link, i) => (
            <Link key={i} to={link.to} prefix="→">
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
