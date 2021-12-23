import { TagSEO } from '@/components/SEO';
// import siteMetadata from '@/data/siteMetadata';
import ListLayout from '@/layouts/ListLayout';
import getAllTags from '@/functions/wordpress/getAllTags';
import getPostsByTag from '@/functions/wordpress/getPostsByTag';

export const POSTS_PER_PAGE = 5;

export async function getStaticPaths() {
  const tags = await getAllTags();

  return {
    paths: tags.map((t) => ({
      params: {
        tag: t.node.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getPostsByTag(params.tag);

  const posts = data.tag.posts.edges.map((post) => {
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
      tag: params.tag,
    },
  };
}

export default function Tag({ posts, tag }) {
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1);
  return (
    <>
      <TagSEO
        // title={`${tag} - ${siteMetadata.author}`}
        // description={`${tag} tags - ${siteMetadata.author}`}
        title="SEO Title"
        description="SEO Description"
      />
      <ListLayout posts={posts} title={title} />
    </>
  );
}
