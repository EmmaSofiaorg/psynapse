import Head from "next/head";

import Container from "../primitives/Container";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList";
import Section from "../components/Section";
import DonationBox from "../components/DonationBox";

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
          {
            to: "/arbeid/mikrodosering",
            heading: "Mikrodosering.no",
            text:
              "Vi har bidratt til Rusreformutvalget og Rusreformutvalgets utredning, og støtter forslaget om avkriminalisering.",
          },
          {
            to: "/arbeid/mikrodosering",
            heading: "How to change your mind",
            text:
              "I 2019 sendte vi ut boken “How to Change Your Mind” og i den forbindelse lagde vi en nettside med ressursser",
          },
        ]}
      />

      <Section
        illustration="thingy"
        label="Utforsk din egen bevissthet"
        heading="Vi jobber for å endre lover og holdninger til bruk av psykedelika og MDMA."
        body="Å utforske sitt eget sinn og bevissthet er en viktig del av det være menneske. Bruk av psykedelika er for mange en del av en genuin spirituell praksis. For mange fører det til dype personlige opplevelser, med varig positiv effekt."
        links={[{ title: "Les mer", to: "test" }]}
      />

      <Container>
        <DonationBox />
      </Container>

      <Section
        reverse
        illustration="thingy"
        label="Samarbeidspartnere"
        heading="Psynapse er et nettverk som jobber for å skape anerkjennelseog forståelse for bruk av psykedelika og MDMA."
        body="Å utforske sitt eget sinn og bevissthet er en viktig del av det være menneske. Bruk av psykedelika er for mange en del av en genuin spirituell praksis. For mange fører det til dype personlige opplevelser, med varig positiv effekt."
      />

      <Footer />
    </div>
  );
}
