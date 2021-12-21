import { TagSEO } from '@/components/SEO';
// import siteMetadata from '@/data/siteMetadata';
import ListLayout from '@/layouts/ListLayout';
import getAllTags from '@/functions/wordpress/getAllTags';
import getPostsByTag from '@/functions/wordpress/getPostsByTag';

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
  const posts = await getPostsByTag(params.tag);

  return { props: { posts: posts.tag.posts.edges, tag: params.tag } };
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
