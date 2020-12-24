import React from "react";
import cn from "../../utils/classnames";
import "./Hero.css";

import Text from "../../primitives/Text";

export default function Hero({
  heading,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  illustration,
}) {
  const classes = cn({
    hero: true,
    [`hero--${illustration}`]: illustration,
  });

  return (
    <div
      className={classes}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : null,
        backgroundPosition,
        backgroundSize,
      }}
    >
      <div className="hero__wrapper">
        <div className="hero__content">
          <Text noMargin tag="h1" variant="heading-lg">
            {heading}
          </Text>
        </div>
      </div>
    </div>
  );
}
