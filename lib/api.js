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
  console.log({ context });
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
