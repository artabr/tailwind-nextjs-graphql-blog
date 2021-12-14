import { ApolloClient, InMemoryCache } from '@apollo/client';

export const wpUrl = process.env.WORDPRESS_URL;
export const wpPreviewSecret = process.env.WORDPRESS_PREVIEW_SECRET;
const wpAppUsername = process.env.WORDPRESS_APPLICATION_USERNAME;
const wpAppPassword = process.env.WORDPRESS_APPLICATION_PASSWORD;

const client = new ApolloClient({
  uri: `${wpUrl}graphql`,
  cache: new InMemoryCache(),
});

export default client;
