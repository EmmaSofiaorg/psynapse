import "../styles/globals.css";
import "../styles/variables.css";
import "../styles/fonts.css";

// Next's Pages Router only allows global stylesheets to be imported from _app.
// These use global (BEM) class names rather than CSS Modules, so they are all
// registered here, ordered primitives -> components -> layout -> page.
import "../primitives/Text/Text.css";
import "../primitives/Grid/Grid.css";
import "../primitives/Container/Container.css";
import "../primitives/Button/Button.css";
import "../primitives/ButtonGroup/ButtonGroup.css";
import "../primitives/Input/Input.css";
import "../primitives/Link/Link.css";
import "../primitives/Html/Html.css";

import "../components/Section/Section.css";
import "../components/Hero/Hero.css";
import "../components/Quote/Quote.css";
import "../components/PersonCard/PersonCard.css";
import "../components/ProjectList/ProjectList.css";
import "../components/DonationBox/DonationBox.css";
import "../components/Footer/Footer.css";
import "../components/Header/Header.css";

import "../layout/ArticleLayout/ArticleLayout.css";

import "./projects/project-layout.css";

import outlineWatcher from "../utils/outlineWatcher";

import BaseLayout from "../layout/BaseLayout";
import { useEffect, useState } from "react";
import { getData } from "../services/dato";
import Router from "next/router";
import * as Fathom from "fathom-client";

async function getContactInfo() {
  return getData({
    query: /* GraphQL */ `
      {
        contactInfo {
          email
          orgNo
          facebookUrl
          address
          addressUrl
        }
      }
    `,
  });
}

// Record a pageview when route changes
Router.events.on("routeChangeComplete", () => {
  Fathom.trackPageview();
});

function MyApp({ Component, pageProps, subscription }) {
  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    outlineWatcher();
    getContactInfo().then((res) => {
      setContactInfo(res.contactInfo);
    });
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      Fathom.load("PJBXYUKP");
      Fathom.trackPageview();
    }
  }, []);

  return (
    <BaseLayout contactInfo={contactInfo}>
      <Component {...pageProps} />
    </BaseLayout>
  );
}

export default MyApp;
