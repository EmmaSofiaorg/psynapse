import Head from "next/head";

import Container from "../../primitives/Container";

import "./ArticleLayout.css";

export default function ArticleLayout({ sidebar, header, children }) {
  return (
    <div>
      <Head>
        <title>Psynapse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className="article-layout">
          <div className="article-layout__content">
            {header}
            {children}
          </div>
          <div className="article-layout__sidebar">{sidebar}</div>
        </div>
      </Container>
    </div>
  );
}
