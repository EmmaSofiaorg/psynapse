import Head from "next/head";
import { createSubscription } from "../../lib/api";
import { useQuerySubscription } from "react-datocms";

import Container from "../../primitives/Container";
import Text from "../../primitives/Text";
import Link from "../../primitives/Link";
import Blocks from "../../components/Blocks";

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
              description
              illustration
              url
              blocks {
                ... on TextRecord {
                  _modelApiKey
                  heading
                  body
                  columns
                }
                ... on QuoteRecord {
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

export default function Project({ subscription }) {
  const { data, error, status } = useQuerySubscription(subscription);

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
            <Text tag="p" variant="ingress">
              {data.project.ingress}
            </Text>
            <Blocks full blocks={data.project.blocks} />
          </div>
          <div className="project-layout__sidebar">
            <div className="project-layout__illustration">
              {Illustration[data.project.illustration]}
            </div>
            <div className="project-layout__info-box">
              <Text variant="heading-sub">Om prosjektet</Text>
              <Text tag="p" variant="body">
                {data.project.description}
              </Text>
              <Link>Les mer</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
