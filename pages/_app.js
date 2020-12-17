import "../styles/globals.css";
import "../styles/variables.css";

import outlineWatcher from "../utils/outlineWatcher";

import BaseLayout from "../layout/BaseLayout";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    outlineWatcher();
  }, []);

  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}

export default MyApp;
