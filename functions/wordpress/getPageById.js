import queryPageById from '@/lib/wordpress/pages/queryPageById';
import client from '@/lib/apollo-client';

export default async function getPageById(id, idType = 'URI') {
  const { data } = await client.query({ query: queryPageById, variables: { id, idType } });

  return data;
}
