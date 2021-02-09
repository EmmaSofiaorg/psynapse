import React from "react";
import Text from "../../primitives/Text";
import Link from "../../primitives/Link";
import "./PersonCard.css";

export default function PersonCard({ name, email, phoneNumber, job, image }) {
  return (
    <article className="person-card">
      <img className="person-card__image" src={image.url}></img>
      <Text bold noMargin tag="h2" variant="body">
        {name}
      </Text>
      <Text tag="p" noMargin>
        {job}
      </Text>
      <Link full href={`mailto:${email}`}>
        {email}
      </Link>
      <Link full href={`tel:${phoneNumber}`}>
        {phoneNumber}
      </Link>
    </article>
  );
}
