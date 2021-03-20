
const getEndpoint = () => {
  return `https://graphql.contentful.com/content/v1/spaces/779zlylj5bqy`
}

const getGraphQlOptions = (query) => {
  return {
    method: "POST",
    headers: {
      Authorization: "Bearer " + "ofMopG4hgv4ILGQ2GS0k9FyraDC4G1ecoGfjQp5Oe8A",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };
}

export const graphqlRequest = async <T>(query: string): Promise<T> => {
  const endpoint = getEndpoint();
  const options = getGraphQlOptions(query);

  var responce = await fetch(endpoint, options)    
   return await responce.json();
};