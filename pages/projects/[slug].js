import Head from "next/head";
import { createSubscription } from "../../lib/api";
import { useQuerySubscription } from "react-datocms";

import Container from "../../primitives/Container";
import Text from "../../primitives/Text";
import Link from "../../primitives/Link";
import Html from "../../primitives/Html";

import Hero from "../../components/Hero";

import Drugs from "../../public/assets/illustrations/drugs.svg";

import "./project-layout.css";

const Illustration = {
  drugs: <Drugs />,
};

export async function getServerSideProps(context) {
  return {
    props: {
      subscription: await createSubscription(context, {
        variables: {
          slug: context.params.slug,
        },
        query: /* GraphQL */ `
          query Project($slug: String) {
            project(filter: { slug: { eq: $slug } }) {
              heading
              ingress
              illustration
              url
              blocks {
                ... on TextRecord {
                  _modelApiKey
                  heading
                  body
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
  text: (props, index) => (
    <div style={{ marginBottom: "var(--space-xl)" }}>
      <Text html tag="h2" variant="heading-md">
        {props.heading}
      </Text>
      <Html>{props.body}</Html>
    </div>
  ),
};

function renderBlocks({ _modelApiKey, ...props }, index) {
  return blocks[_modelApiKey](props, index);
}

export default function Project({ subscription }) {
  const { data, error, status } = useQuerySubscription(subscription);

  console.log({ data, error, status });

  return (
    <div>
      <Head>
        <title>Psynapse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className="project-layout">
          <div className="project-layout__content">
            <Text tag="h1" variant="heading-lg">
              {data.project.heading}
            </Text>
            {data.project.blocks.map((block, i) => renderBlocks(block, i))}
          </div>
          <div className="project-layout__sidebar">
            <div className="project-layout__illustration">
              {Illustration[data.project.illustration]}
            </div>
            <div className="project-layout__info-box">
              <Text variant="heading-sub">Om prosjektet</Text>
              <Text tag="p" variant="body">
                {data.project.ingress}
              </Text>
              <Link>Les mer</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
