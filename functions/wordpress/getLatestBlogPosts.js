import client from '@/lib/apollo-client';
import queryPostsArchive from '@/lib/wordpress/posts/queryPostsArchive';

const getLatestBlogPosts = async () => {
  const { data } = await client.query({
    query: queryPostsArchive,
  });

  return {
    props: {
      posts: data.posts.edges.map((post) => {
        const { slug, date, title, excerpt } = post.node;

        return {
          slug,
          date,
          title,
          summary: excerpt,
        };
      }),
    },
  };
};

export default getLatestBlogPosts;
