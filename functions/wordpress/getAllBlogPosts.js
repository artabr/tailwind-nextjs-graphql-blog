import client from '@/lib/apollo-client';
import queryPostsArchive from '@/lib/wordpress/posts/queryPostsArchive';

const mapPosts = (posts) => {
  return posts.map((post) => {
    const { slug, date, title, excerpt, tags } = post.node;

    return {
      slug,
      date,
      title,
      excerpt,
      tags: tags.edges.map((tag) => ({ name: tag.node.name, slug: tag.node.slug })),
    };
  });
};

const getAllBlogPosts = () => {
  const recursePosts = (startCursor, hasNextPage, nextPosts) => {
    if (!hasNextPage) return nextPosts;
    return client
      .query({
        query: queryPostsArchive,
        variables: { first: 10, after: startCursor },
      })
      .then(({ data }) => {
        const { endCursor, hasNextPage } = data.posts.pageInfo;
        const posts = mapPosts(data.posts.edges);
        return recursePosts(endCursor, hasNextPage, [...posts, ...nextPosts]);
      });
  };

  return client
    .query({
      query: queryPostsArchive,
      variables: { first: 10 },
    })
    .then(({ data }) => {
      const { endCursor, hasNextPage } = data.posts.pageInfo;
      const posts = mapPosts(data.posts.edges);
      return recursePosts(endCursor, hasNextPage, posts);
    });
};

export default getAllBlogPosts;
