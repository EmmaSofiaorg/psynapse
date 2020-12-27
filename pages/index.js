import Head from "next/head";
import { createSubscription } from "../lib/api";
import { useQuerySubscription } from "react-datocms";

import Container from "../primitives/Container";
import Text from "../primitives/Text";
import Link from "../primitives/Link";
import Html from "../primitives/Html";

import Hero from "../components/Hero";
import PersonCard from "../components/PersonCard";
import ProjectList from "../components/ProjectList";
import Section from "../components/Section";
import DonationBox from "../components/DonationBox";

export async function getStaticProps(context) {
  return {
    revalidate: 1,
    props: {
      subscription: await createSubscription(context, {
        query: /* GraphQL */ `
          query {
            frontpage {
              heading
              blocks {
                ... on PersonListRecord {
                  _modelApiKey
                  heading
                  ingress
                  people {
                    name
                    job
                    phoneNumber
                    email
                    image {
                      url
                    }
                  }
                }
                ... on DonationBoxRecord {
                  _modelApiKey
                  heading
                  ingress
                  body
                }
                ... on SectionRecord {
                  _modelApiKey
                  illustration
                  heading
                  subheading
                  variant
                  linkText
                  linkTo
                  reverse
                }
                ... on ProjectListRecord {
                  _modelApiKey
                  heading
                  ingress
                  projects {
                    slug
                    url
                    readMore
                    heading
                    ingress
                  }
                }
              }
            }
          }
        `,
      }),
    },
  };
}

const blocks = {
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
          gridTemplateColumns: "1fr 1fr",
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

export default function Home({ subscription }) {
  const { data, error, status } = useQuerySubscription(subscription);

  console.log({ data, error, status });

  return (
    <div>
      <Head>
        <title>Psynapse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero illustration="circle" heading={data.frontpage.heading} />

      {data.frontpage.blocks.map((block, i) => renderBlock(block, i))}
    </div>
  );
}
