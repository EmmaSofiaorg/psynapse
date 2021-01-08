import React from "react";
import Container from "../../primitives/Container";
import Text from "../../primitives/Text";
import Html from "../../primitives/Html";

import PersonCard from "../../components/PersonCard";
import ProjectList from "../../components/ProjectList";
import Section from "../../components/Section";
import DonationBox from "../../components/DonationBox";
import Quote from "../../components/Quote";

const blocks = {
  text: (props, index) => (
    <div style={{ marginBottom: "var(--space-xl)" }}>
      <Text html tag="h2" variant="heading-md">
        {props.heading}
      </Text>
      <Html>{props.body}</Html>
    </div>
  ),
  quote: (props, index) => <Quote {...props} key={index}></Quote>,
  donation_box: (props, index) => (
    <Container key={index}>
      <DonationBox
        heading={props.heading}
        ingress={props.ingress}
        body={props.body}
      />
    </Container>
  ),
  section: (props, index) => (
    <Section
      key={index}
      label={props.heading}
      heading={props.subheading}
      variant={props.variant}
      body={props.body}
      illustration={props.illustration}
      linkText={props.linkText}
      linkTo={props.linkTo}
      reverse={props.reverse}
    />
  ),
  project_list: (props, index) => (
    <ProjectList
      key={index}
      heading={props.heading}
      ingress={props.ingress}
      items={props.projects}
    />
  ),
  person_list: (props, index) => (
    <Container key={index}>
      <div
        style={{
          display: "grid",
          gap: "var(--space-xl)",
          gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr));",
        }}
      >
        <div>
          <Text tag="h2" variant="label">
            {props.heading}
          </Text>
          <Text tag="p" variant="heading-sm">
            {props.ingress}
          </Text>
          <Html>{props.body}</Html>
        </div>
        <div
          style={{
            display: "grid",
            gap: "var(--space-xl)",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {props.people.map((person, i) => (
            <PersonCard {...person} />
          ))}
        </div>
      </div>
    </Container>
  ),
};

function renderBlock({ _modelApiKey, ...props }, index) {
  return blocks[_modelApiKey]?.(props, index) || null;
}

export default function Blocks({ blocks }) {
  return <>{blocks.map((block, i) => renderBlock(block, i))}</>;
}
