import PageTitle from '@/components/PageTitle';
import PostSimple from '@/layouts/PostSimple';
import getPostTypeById from '@/functions/wordpress/getPostTypeById';
import parse from 'html-react-parser';
import client from '@/lib/apollo-client';
import queryPostsSlugs from '@/lib/wordpress/projects/queryProjectsSlugs';

export async function getStaticPaths() {
  const { data } = await client.query({
    query: queryPostsSlugs,
    variables: { first: 25 },
  });

  return {
    paths: data.projects.edges.map((project) => ({
      params: {
        slug: [project.node.slug],
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const prev = null;
  const next = null;

  const authorDetails = [];

  const response = await getPostTypeById('project', params.slug.join(''));

  const { project } = response;

  return { props: { project, authorDetails, prev, next } };
}

export default function Projects({ project, authorDetails, prev, next }) {
  const frontMatter = {
    slug: project.slug,
    fileName: '',
    date: project.date,
    title: project.title,
    tags: project.tags.edges.map((tag) => ({ name: tag.node.name, slug: tag.node.slug })),
  };

  return (
    <>
      {project.status == 'publish' ? (
        <PostSimple frontMatter={frontMatter} authorDetails={authorDetails} next={next} prev={prev}>
          {parse(project.content)}
        </PostSimple>
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
