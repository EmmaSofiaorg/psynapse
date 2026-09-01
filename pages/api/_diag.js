// TEMPORARY diagnostic endpoint. Deploy-preview only — remove before merging.
// Netlify returns an opaque 500 for every page that renders the Html primitive,
// so this reproduces each import/render step in isolation and reports the error.
export default async function handler(req, res) {
  const steps = [];

  const attempt = async (name, fn) => {
    try {
      const value = await fn();
      steps.push({ step: name, ok: true, value: String(value).slice(0, 120) });
    } catch (error) {
      steps.push({
        step: name,
        ok: false,
        message: error && error.message,
        stack: error && error.stack && error.stack.split("\n").slice(0, 6),
      });
    }
  };

  await attempt("import react", async () => typeof (await import("react")).default);
  await attempt("import react-dom/server", async () => typeof (await import("react-dom/server")).renderToStaticMarkup);
  await attempt("import html-react-parser", async () => typeof (await import("html-react-parser")).default);
  await attempt("parse simple html", async () => {
    const { default: parse } = await import("html-react-parser");
    return JSON.stringify(!!parse("<p>hi</p>"));
  });
  await attempt("import Html primitive", async () => typeof (await import("../../primitives/Html")).default);
  await attempt("render Html primitive", async () => {
    const [{ renderToStaticMarkup }, { default: Html }, { default: React }] = await Promise.all([
      import("react-dom/server"),
      import("../../primitives/Html"),
      import("react"),
    ]);
    return renderToStaticMarkup(
      React.createElement(Html, null, '<p>hello <a href="/x">link</a></p>')
    );
  });
  await attempt("import Blocks", async () => typeof (await import("../../components/Blocks")).default);
  await attempt("import services/dato", async () => typeof (await import("../../services/dato")).renderMetaTags);

  res.status(200).json({ node: process.version, steps });
}
