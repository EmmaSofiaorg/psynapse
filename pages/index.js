import Head from "next/head";
import { createSubscription } from "../lib/api";
import { useQuerySubscription, renderMetaTags } from "react-datocms";

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
              seo: _seoMetaTags {
                tag
                content
                attributes
              }
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
      <Head>{renderMetaTags(data.frontpage.seo)}</Head>

      <Hero illustration="circle" heading={data.frontpage.heading} />

      <Blocks blocks={data.frontpage.blocks} />
    </div>
  );
}
