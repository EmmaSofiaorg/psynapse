import React from "react";
import cn from "../../utils/classnames";
import "./Hero.css";

import Text from "../../primitives/Text";

export default function Hero({
  heading,
  ingress,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  illustration,
  size,
}) {
  const classes = cn({
    hero: true,
    [`hero--${size}`]: size,
    [`hero--${illustration}`]: illustration,
  });

  return (
    <section
      className={classes}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : null,
        backgroundPosition,
        backgroundSize,
      }}
    >
      <div className="hero__wrapper">
        <div className="hero__content">
          {heading && (
            <Text noMargin={!ingress} tag="h1" variant="heading-lg">
              {heading}
            </Text>
          )}
          {ingress && (
            <Text noMargin tag="p" variant="ingress">
              {ingress}
            </Text>
          )}
        </div>
      </div>
    </section>
  );
}
