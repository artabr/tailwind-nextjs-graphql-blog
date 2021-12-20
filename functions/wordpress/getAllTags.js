import client from '@/lib/apollo-client';
import queryTagsArchive from '@/lib/wordpress/tags/queryTagsArchive';

const getAllTags = async () => {
  const { data } = await client.query({
    query: queryTagsArchive,
  });

  return data.tags.edges;
};

export default getAllTags;
