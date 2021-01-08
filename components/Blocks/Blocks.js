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
  two_column_grid: (props, index, full) => (
    <Container full>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          marginBottom: "var(--space-xl)",
        }}
      >
        <div
          style={{
            backgroundColor: "var(--color-vibrant-blue)",
            padding: "var(--space-xl)",
            color: "var(--color-white)",
          }}
        >
          <Html style={{ "--color-vibrant-blue": "white" }}>
            {props.columnOne}
          </Html>
        </div>
        <div
          style={{
            backgroundColor: "var(--color-dusty-lilac)",
            padding: "var(--space-xl)",
          }}
        >
          <Html>{props.columnTwo}</Html>
        </div>
      </div>
    </Container>
  ),
  text: (props, index, full) => (
    <Container
      key={index}
      full={full}
      style={{ marginBottom: "var(--space-xl)" }}
    >
      <Text html tag="h2" variant="heading-md">
        {props.heading}
      </Text>
      <Html columns={props.columns}>{props.body}</Html>
    </Container>
  ),
  quote: (props, index) => <Quote {...props} key={index}></Quote>,
  donation_box: (props, index, full) => (
    <Container full={full} key={index}>
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
      reverse={props.reverse}
    />
  ),
  project_list: (props, index, full) => (
    <ProjectList
      key={index}
      heading={props.heading}
      ingress={props.ingress}
      items={props.projects}
    />
  ),
  person_list: (props, index, full) => (
    <Container full={full} key={index}>
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

function renderBlock({ _modelApiKey, ...props }, index, full) {
  return blocks[_modelApiKey]?.(props, index, full) || null;
}

export default function Blocks({ blocks, full }) {
  return <>{blocks.map((block, i) => renderBlock(block, i, full))}</>;
}
