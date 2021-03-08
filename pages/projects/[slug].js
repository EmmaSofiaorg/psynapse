import Head from "next/head";
import { createSubscription } from "../../services/dato";
import { renderMetaTags, useQuerySubscription } from "react-datocms";

import Container from "../../primitives/Container";
import Text from "../../primitives/Text";
import Html from "../../primitives/Html";
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
              seo: _seoMetaTags {
                tag
                content
                attributes
              }
              blocks {
                ... on TextRecord {
                  _modelApiKey
                  heading
                  body
                  columns
                  full
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
      <Head>{renderMetaTags(data.project.seo)}</Head>

      <Container>
        <div className="project-layout">
          <div className="project-layout__top-content">
            <Text tag="h1" variant="heading-lg">
              {data.project.heading}
            </Text>
            <Text tag="p" variant="ingress">
              {data.project.ingress}
            </Text>
          </div>
          <div className="project-layout__content">
            <div
              className="project-layout__blocks"
              style={{ "--section-padding": "var(--space-xl)" }}
            >
              <Blocks full blocks={data.project.blocks} />
            </div>
            <div className="project-layout__sidebar">
              <div className="project-layout__illustration">
                {Illustration[data.project.illustration]}
              </div>
              <div className="project-layout__info-box">
                <Text variant="heading-sm">Om prosjektet</Text>
                <Html tag="p" variant="body" noMargin>
                  {data.project.description}
                </Html>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
