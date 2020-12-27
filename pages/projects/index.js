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
              heading
              ingress
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

function renderBlocks({ _modelApiKey, ...props }, index) {
  return blocks[_modelApiKey](props, index);
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

      <Hero illustration="circle" heading="Prosjekter" />

      <ProjectList items={data.allProjects} />
    </div>
  );
}
