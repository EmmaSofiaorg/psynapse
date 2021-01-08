import Head from "next/head";
import { createSubscription } from "../lib/api";
import { useQuerySubscription } from "react-datocms";

import Hero from "../components/Hero";
import Blocks from "../components/Blocks";

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
                  body
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
                    headingShort
                    description
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

      <Blocks blocks={data.frontpage.blocks} />
    </div>
  );
}
