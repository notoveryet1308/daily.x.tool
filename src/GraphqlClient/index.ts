import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  ApolloLink,
  Operation,
  NextLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import omitDeep from "omit-deep-lodash";

import { onError } from "@apollo/client/link/error";

type OperationTypeNode = "query" | "mutation" | "subscription";

const removeTypenameFromMutation = (
  operation: Operation,
  forward: NextLink
) => {
  const definition = operation?.query?.definitions.filter(
    (def) => def.kind === "OperationDefinition"
  )?.[0];
  const mutation: OperationTypeNode = "mutation";
  if (
    definition?.kind == "OperationDefinition" &&
    definition?.operation === mutation
  ) {
    operation.variables = omitDeep(operation.variables, "__typename");
    return forward(operation);
  }
  return forward(operation);
};

const removeTypenameFromMutationLink = new ApolloLink(
  removeTypenameFromMutation
);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  let token = localStorage.getItem("accessToken");
  if (token) {
    token = JSON.parse(token);
  }
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = new HttpLink({
  uri: "https://dailyxtoolapi.onrender.com/graphql",
  // uri: "http://localhost:4000/graphql",
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    removeTypenameFromMutationLink,
    errorLink,
    authLink.concat(httpLink),
  ]),
});

export default client;
