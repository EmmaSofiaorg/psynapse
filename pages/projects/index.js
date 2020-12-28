import Head from "next/head";
import { createSubscription } from "../../lib/api";
import { useQuerySubscription } from "react-datocms";

import Hero from "../../components/Hero";
import ProjectList from "../../components/ProjectList";

export async function getStaticProps(context) {
  return {
    revalidate: 1,
    props: {
      subscription: await createSubscription(context, {
        query: /* GraphQL */ `
          query AllProjects {
            allProjects {
              headingShort
              description
              url
              readMore
              slug
            }
          }
        `,
      }),
    },
  };
}

export default function Projects({ subscription }) {
  const { data, error, status } = useQuerySubscription(subscription);

  console.log({ data, error, status });

  return (
    <div>
      <Head>
        <title>Psynapse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        size="sm"
        illustration="circle"
        heading="Prosjekter"
        ingress="Bla bla bla bla"
      />

      <ProjectList items={data.allProjects} />
    </div>
  );
}
