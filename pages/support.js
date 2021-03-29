import Head from "next/head";
import { createSubscription } from "../services/dato";
import { renderMetaTags, useQuerySubscription } from "react-datocms";

import Hero from "../components/Hero";
import Blocks from "../components/Blocks";

export async function getStaticProps(context) {
  return {
    revalidate: 1,
    props: {
      subscription: await createSubscription(context, {
        query: /* GraphQL */ `
          query {
            supportpage {
              heading
              seo: _seoMetaTags {
                tag
                content
                attributes
              }
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
                  full
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
                  image {
                    id
                    url
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

export default function Support({ subscription }) {
  const { data, error, status } = useQuerySubscription(subscription);

  return (
    <div>
      <Head>{renderMetaTags(data.supportpage.seo)}</Head>

      <div className="halla">
        <Hero
          size="sm"
          illustration="circle"
          heading={data.supportpage.heading}
        />

        <Blocks blocks={data.supportpage.blocks} />
      </div>
    </div>
  );
}
