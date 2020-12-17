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
        links={[{ title: "Les mer om oss", to: "test" }]}
      />

      <ProjectList
        label="Våre prosjekter"
        title="Senectus elementum non placerat et neque purus."
        body="Praesent eu fringilla proin diam gravida. Sed nibh scelerisque interdum odio fusce mauris. Tortor amet magna interdum pellentesque facilisi sit."
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
