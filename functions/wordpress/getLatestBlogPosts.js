import client from '@/lib/apollo-client';
import queryPostsArchive from '@/lib/wordpress/posts/queryPostsArchive';

const getLatestBlogPosts = async (postCount = 5) => {
  const { data } = await client.query({
    query: queryPostsArchive,
    variables: { first: postCount },
  });

  return data;
};

export default getLatestBlogPosts;
