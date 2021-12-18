import client from '@/lib/apollo-client';

export default async function processPostTypeQuery(
  postType,
  id,
  query,
  variables = {},
  preview = null
) {
  const { data } = await client.query({ query, variables });

  return data;
}
