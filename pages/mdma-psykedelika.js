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
            druginfoPage {
              heading
              ingress
              blocks {
                ... on TwoColumnGridRecord {
                  _modelApiKey
                  columnOne
                  columnTwo
                }
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
                  reverse
                }
              }
            }
          }
        `,
      }),
    },
  };
}

export default function DruginfoPage({ subscription }) {
  const { data, error, status } = useQuerySubscription(subscription);

  return (
    <div>
      <Head>
        <title>Psynapse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="halla">
        <Hero
          size="md"
          illustration="circle"
          heading={data.druginfoPage.heading}
          ingress={data.druginfoPage.ingress}
        />

        <Blocks blocks={data.druginfoPage.blocks} />
      </div>
    </div>
  );
}
