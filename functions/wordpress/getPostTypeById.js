import processPostTypeQuery from '@/functions/wordpress/processPostTypeQuery';
import queryPostById from '@/lib/wordpress/posts/queryPostById';

export default async function getPostTypeById(postType, id, idType = 'SLUG', preview = null) {
  // Define single post query based on post type.
  const postTypeQuery = {
    post: queryPostById,
  };

  // Retrieve post type query.
  const query = postTypeQuery?.[postType] ?? null;

  return processPostTypeQuery(postType, id, query, { id, idType }, preview);
}
