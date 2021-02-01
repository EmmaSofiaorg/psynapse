import Head from "next/head";

import Hero from "../../components/Hero";

export default function Takk({}) {
  return (
    <div>
      <Head>
        <title>Psynapse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero size="sm" illustration="circle" heading="Takk for støtten!" />
    </div>
  );
}
