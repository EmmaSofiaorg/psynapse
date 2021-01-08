import React from "react";
import cn from "../../utils/classnames";
import "./Section.css";
import CircleGrid from "../../public/assets/illustrations/circle-grid.svg";
import Thingy from "../../public/assets/illustrations/thingy.svg";
import LSD from "../../public/assets/illustrations/lsd.svg";

import Text from "../../primitives/Text";
import Link from "../../primitives/Link";
import Html from "../../primitives/Html";

const Illustration = {
  "circle-grid": <CircleGrid />,
  trip: <Thingy />,
  lsd: <LSD />,
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
          <Text tag="h2" variant="label">
            {label}
          </Text>
          <Text tag="p" variant="heading-sm">
            {heading}
          </Text>
          {body && <Html>{body}</Html>}
        </div>
      </div>
    </section>
  );
}
