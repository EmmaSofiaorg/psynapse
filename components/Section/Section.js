import React from "react";
import cn from "../../utils/classnames";
import "./Section.css";
import CircleGrid from "../../public/assets/illustrations/circle-grid.svg";
import Thingy from "../../public/assets/illustrations/thingy.svg";

import Text from "../../primitives/Text";
import Link from "../../primitives/Link";

const Illustration = {
  circle: <CircleGrid />,
  thingy: <Thingy />,
};

export default function Section({
  variant,
  reverse,
  illustration,
  label,
  heading,
  body,
  linkText,
  linkTo,
}) {
  const classNames = cn({
    section: true,
    [`section--${variant}`]: variant,
    "section--reverse": reverse,
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
          {body && (
            <Text tag="p" variant="body">
              {body}
            </Text>
          )}

          {linkTo && (
            <Link href={linkTo} prefix="→">
              {linkText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
