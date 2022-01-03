import PostSimple from '@/layouts/PostSimple';
import getPageById from '@/functions/wordpress/getPageById';
import parse from 'html-react-parser';

export async function getStaticProps() {
  const { page } = await getPageById('sample-page');

  console.log(page);

  const { name, email, description, avatar } = page.author.node;

  const authorDetails = {
    name,
    avatar: avatar.url,
    email,
    occupation: '',
    company: '',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    github: 'https://github.com',
  };

  return { props: { page, authorDetails, description } };
}

export default function About({ page, authorDetails }) {
  const frontMatter = {
    slug: page.slug,
    fileName: '',
    date: page.date,
    title: page.title,
  };

  return (
    <PostSimple frontMatter={frontMatter} authorDetails={authorDetails}>
      {parse(page.content)}
    </PostSimple>
  );
}
