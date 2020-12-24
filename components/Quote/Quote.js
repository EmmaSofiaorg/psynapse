import React from "react";
import "./Quote.css";
import Text from "../../primitives/Text";
import Html from "../../primitives/Html";
import Link from "../../primitives/Link";
import Illustration from "../../public/assets/illustrations/quote.svg";

export default function Quote({ heading = "", ingress = "", body = "" }) {
  return (
    <div className="quote">
      <div className="quote__illustration">
        <Illustration></Illustration>
      </div>
      <div className="quote__content">
        <Text tag="h1" variant="heading-sm">
          {heading}
        </Text>
        <Html>{body}</Html>
      </div>
    </div>
  );
}
