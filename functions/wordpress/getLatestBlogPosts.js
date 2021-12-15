import client from '@/lib/apollo-client';
import queryPostsArchive from '@/lib/wordpress/posts/queryPostsArchive';

const getLatestBlogPosts = async (postCount = 5) => {
  const { data } = await client.query({
    query: queryPostsArchive,
    variables: { first: postCount },
  });

  return {
    props: {
      posts: data.posts.edges.map((post) => {
        const { slug, date, title, excerpt, tags } = post.node;

        return {
          slug,
          date,
          title,
          summary: excerpt,
          tags: tags.edges.map((tag) => ({ name: tag.node.name, slug: tag.node.slug })),
        };
      }),
      data,
    },
  };
};

export default getLatestBlogPosts;
