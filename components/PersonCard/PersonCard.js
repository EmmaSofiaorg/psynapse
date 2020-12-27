import React from "react";
import "./PersonCard.css";

export default function PersonCard({ name, email, phoneNumber, job, image }) {
  return (
    <article className="person-card">
      <img className="person-card__image" src={image.url}></img>
      <h2>{name}</h2>
      <p>{job}</p>
      <a href={`mailto:${email}`}>{email}</a>
      <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
    </article>
  );
}
