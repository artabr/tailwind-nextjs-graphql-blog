import siteMetadata from '@/data/siteMetadata';
import ListLayout from '@/layouts/ListLayout';
import { PageSEO } from '@/components/SEO';
import getLatestBlogPosts from '@/functions/wordpress/getLatestBlogPosts';

export const POSTS_PER_PAGE = 5;

export async function getStaticProps() {
  const data = await getLatestBlogPosts(25);

  const posts = data.posts.edges.map((post) => {
    const { slug, date, title, excerpt, tags } = post.node;

    return {
      slug,
      date,
      title,
      excerpt,
      tags: tags.edges.map((tag) => ({ name: tag.node.name, slug: tag.node.slug })),
    };
  });

  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return {
    props: {
      initialDisplayPosts,
      posts,
      pagination,
      data,
    },
  };
}

export default function Blog({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  );
}
