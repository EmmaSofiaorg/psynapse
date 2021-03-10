import "../styles/globals.css";
import "../styles/variables.css";
import "../styles/fonts.css";

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
