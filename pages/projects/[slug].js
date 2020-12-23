import Head from "next/head";
import { createSubscription } from "../../lib/api";
import { useQuerySubscription } from "react-datocms";

import Container from "../../primitives/Container";
import Text from "../../primitives/Text";
import Link from "../../primitives/Link";

import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

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
      <Text html tag="div" variant="body">
        {props.body}
      </Text>
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

      <Hero variant="circle" heading={data.project.heading} />

      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-xl)",
          }}
        >
          <div>
            {data.project.blocks.map((block, i) => renderBlocks(block, i))}
          </div>
          <div
            style={{
              height: "max-content",
              padding: "var(--space-lg)",
              backgroundColor: "var(--color-vibrant-blue",
              color: "var(--color-white)",
            }}
          >
            <Text variant="heading-sub">Om prosjektet</Text>
            <Text tag="p" variant="body">
              {data.project.ingress}
            </Text>
            <Link>Les mer</Link>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
