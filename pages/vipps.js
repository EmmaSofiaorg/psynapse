import Head from "next/head";

import ArticleLayout from "../layout/ArticleLayout";

import Hero from "../components/Hero";
import Text from "../primitives/Text";
import Container from "../primitives/Container";

export default function Vilkar({}) {
  return (
    <div>
      <Head>
        <title>Psynapse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        size="sm"
        illustration="circle"
        heading="Vilkår for vipps donasjoner og betalinger"
      />

      <ArticleLayout>
        <Text tag="p" variant="body">
          Når du donerer et engangsbeløp trekkes beløpet fra kortet ditt. Ved
          fast donasjon trekkes beløpet fra kortet ditt en gang i måneden. Det
          er ingen bindingstid, og du kan når som helst avslutte den faste
          betalingen via Vipps-appen.
        </Text>
        <Text tag="p" variant="body">
          Du kan også kontakte oss for hjelp til å avslutte betalingene. Uansett
          om du donerer et engangsbeløp eller gir en månedlig donasjon, vil navn
          og nummer vil fremkomme av transaksjonsoversikten. Vi deler ikke disse
          opplysningene med andre.
        </Text>
      </ArticleLayout>
    </div>
  );
}
