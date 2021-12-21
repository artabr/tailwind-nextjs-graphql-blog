import PageTitle from '@/components/PageTitle';
import PostLayout from '@/layouts/PostLayout';
import getPostTypeById from '@/functions/wordpress/getPostTypeById';
import parse from 'html-react-parser';
import client from '@/lib/apollo-client';
import queryPostsSlugs from '@/lib/wordpress/posts/queryPostsSlugs';

const DEFAULT_LAYOUT = 'PostLayout';

export async function getStaticPaths() {
  const { data } = await client.query({
    query: queryPostsSlugs,
    variables: { first: 25 },
  });

  return {
    paths: data.posts.edges.map((post) => ({
      params: {
        slug: [post.node.slug],
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const prev = null;
  const next = null;

  const authorDetails = [];

  const response = await getPostTypeById('post', params.slug.join(''));

  const { post } = response;

  return { props: { post, authorDetails, prev, next } };
}

export default function Blog({ post, authorDetails, prev, next }) {
  const frontMatter = {
    slug: post.slug,
    fileName: '',
    date: post.date,
    title: post.title,
    tags: post.tags.edges.map((tag) => ({ name: tag.node.name, slug: tag.node.slug })),
  };

  return (
    <>
      {post.status == 'publish' ? (
        // <MDXLayoutRenderer
        //   layout={frontMatter.layout || DEFAULT_LAYOUT}
        //   toc={toc}
        //   mdxSource={mdxSource}
        //   frontMatter={frontMatter}
        //   authorDetails={authorDetails}
        //   prev={prev}
        //   next={next}
        // />
        <>
          <PostLayout
            frontMatter={frontMatter}
            authorDetails={authorDetails}
            next={next}
            prev={prev}
          >
            {parse(post.content)}
          </PostLayout>
        </>
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  );
}
