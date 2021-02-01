import "../styles/globals.css";
import "../styles/variables.css";

import outlineWatcher from "../utils/outlineWatcher";

import BaseLayout from "../layout/BaseLayout";
import { useEffect, useState } from "react";
import { getData } from "../lib/api";

async function getContactInfo() {
  return getData({
    query: /* GraphQL */ `
      {
        contactInfo {
          email
          phoneNumber
          facebookUrl
          address
          addressUrl
        }
      }
    `,
  });
}

function MyApp({ Component, pageProps, subscription }) {
  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    outlineWatcher();
    getContactInfo().then((res) => {
      setContactInfo(res.contactInfo);
    });
  }, []);

  return (
    <BaseLayout contactInfo={contactInfo}>
      <Component {...pageProps} />
    </BaseLayout>
  );
}

export default MyApp;
