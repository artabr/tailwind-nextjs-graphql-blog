import client from '@/lib/apollo-client';
import queryProjectsArchive from '@/lib/wordpress/projects/queryProjectsArchive';

const getProjects = async () => {
  const { data } = await client.query({
    query: queryProjectsArchive,
  });

  return {
    props: {
      projects: data.projects.edges.map((project) => {
        const { slug, date, title, excerpt, featuredImage } = project.node;

        return {
          slug,
          date,
          title,
          summary: excerpt,
          imgSrc: !featuredImage ? null : featuredImage?.node?.sourceUrl,
        };
      }),
      data,
    },
  };
};

export default getProjects;
