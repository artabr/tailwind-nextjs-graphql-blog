import client from '@/lib/apollo-client';
import queryPostsByTag from '@/lib/wordpress/tags/queryPostsByTag';

export default async function getPostsByTag(id, idType = 'SLUG') {
  const { data } = await client.query({ query: queryPostsByTag, variables: { id, idType } });

  return data;
}
