import queryProjectById from '@/lib/wordpress/projects/queryProjectById';
import client from '@/lib/apollo-client';

export default async function getProjectById(id) {
  const { data } = await client.query({ query: queryProjectById, variables: { id } });

  return data;
}
