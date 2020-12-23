import Head from "next/head";
import { createSubscription } from "../lib/api";
import { useQuerySubscription } from "react-datocms";

import Container from "../primitives/Container";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList";
import Section from "../components/Section";
import DonationBox from "../components/DonationBox";

export async function getServerSideProps(context) {
  return {
    props: {
      subscription: await createSubscription(context, {
        query: /* GraphQL */ `
          query {
            frontpage {
              heading
              blocks {
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
};

function renderBlocks({ _modelApiKey, ...props }, index) {
  return blocks[_modelApiKey](props, index);
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

      <Hero variant="circle" heading={data.frontpage.heading} />

      {data.frontpage.blocks.map((block, i) => renderBlocks(block, i))}

      <Footer />
    </div>
  );
}
