import AuthorLayout from '@/layouts/AuthorLayout';
import getPageById from '@/functions/wordpress/getPageById';

export async function getStaticProps() {
  const userDetails = await getPageById('about');

  console.log(userDetails.page.author.node);
  const { name, email, description, avatar } = userDetails.page.author.node;

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

  console.log(authorDetails);

  return { props: { authorDetails, description } };
}

export default function About({ authorDetails, description }) {
  return <AuthorLayout frontMatter={authorDetails}>{description}</AuthorLayout>;
}
