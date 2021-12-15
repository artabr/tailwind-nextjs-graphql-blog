import Link from 'next/link';
import kebabCase from '@/lib/utils/kebabCase';

const Tag = ({ slug, children }) => {
  return (
    <Link href={`/tags/${kebabCase(slug)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        {children}
      </a>
    </Link>
  );
};

export default Tag;
