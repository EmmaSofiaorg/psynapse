import React from "react";

export const getData = async ({ query, variables, preview }) => {
  try {
    const endpoint = preview
      ? `https://graphql.datocms.com/preview`
      : `https://graphql.datocms.com/`;

    const { data, errors = [] } = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer df61241d9bc5a08626bb87659593e5`,
      },
      url: endpoint,
      body: JSON.stringify({
        query,
        variables,
      }),
    }).then((res) => res.json());

    if (errors.length > 0) {
      console.log(
        `GraphQL call errored with:`,
        JSON.stringify(errors, null, 2)
      );
      throw new Error("GraphQL query failed, better check the logs.");
    }

    return data;
  } catch (err) {
    console.log("fetch() failed", err);
  }
};

export const createSubscription = async (context, request) => {
  return context.preview
    ? {
        ...request,
        initialData: await getData(request),
        token: "df61241d9bc5a08626bb87659593e5",
      }
    : {
        enabled: false,
        initialData: await getData(request),
      };
};

/**
 * Local replacements for react-datocms' `renderMetaTags` and
 * `useQuerySubscription`.
 *
 * react-datocms@8 declares "type": "module" but ships its CommonJS build as
 * plain .js files, so Node loads those files as ESM and they die with
 * "exports is not defined in ES module scope". Bundlers hide this by picking
 * the ESM build, which is why it only surfaced once the pages ran in Netlify's
 * serverless runtime -- every page importing react-datocms/seo returned a 500.
 *
 * Both functions we used are small enough to own outright, which removes the
 * dependency rather than betting on the packaging being fixed upstream.
 */

// Mirrors renderMetaTags: DatoCMS _seoMetaTags records map 1:1 onto <title>,
// <meta> and <link> elements. Keys match upstream so markup is byte-identical.
export const renderMetaTags = (data = []) =>
  data.map(({ tag, attributes, content }) => {
    const key = [tag];

    for (const name of ["property", "name", "rel", "sizes"]) {
      if (attributes && name in attributes) {
        key.push(attributes[name]);
      }
    }

    return React.createElement(
      tag,
      { key: key.join("-"), ...attributes },
      content
    );
  });

// The site always renders with `enabled: false` (see createSubscription), so the
// subscription branch only ever returned initialData anyway. Live-updating
// DatoCMS previews are not supported by this replacement.
export const useQuerySubscription = ({ initialData } = {}) => ({
  data: initialData,
  error: null,
  status: "closed",
});
