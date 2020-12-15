import Head from "next/head";

import Container from "../primitives/Container";

import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList";
import Section from "../components/Section";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Psynapse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        variant="circle"
        heading="Vi jobber for å endre lover og holdninger til bruk av psykedelika og
          MDMA."
      />

      <Section
        variant="light"
        illustration="circle-grid"
        label="Vår visjon"
        heading="Vi aksepterer og anerkjenner at mennesker bruker psykedelika og MDMA til rekreasjonelle, spirituelle eller terapeutiske formål."
      />

      <ProjectList
        items={[
          {
            to: "/arbeid/rusreform",
            heading: "Rusreform",
            text:
              "Vi har bidratt både innspill til Rusreformutvalget og svar til Rusreformutvalgets utredning, og støtter forslaget om avkriminalisering.",
          },
          {
            to: "/arbeid/tryggtripp",
            heading: "Tryggtripp.no",
            text:
              "Trygg Tripp er en skadereduserende veileder for MDMA og psykedelika, med informasjon om dosering, sikkerhet og effekt.",
          },
        ]}
      />

      <footer>Footer</footer>
    </div>
  );
}
