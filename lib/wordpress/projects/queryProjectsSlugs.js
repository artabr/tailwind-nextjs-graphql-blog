import archivePageInfo from '@/lib/wordpress/partials/archivePageInfo';
import { gql } from '@apollo/client';

// Query partial: retrieve archive slugs.
export const archiveProjectsSlugs = `
  projects(
    first: $first
    last: $last
    after: $after
    before: $before
    where: {orderby: {field: $orderBy, order: $order}}
  ) {
    ${archivePageInfo}
    edges {
      node {
        slug
      }
    }
  }
`;

// Query: retrieve all post slugs.
const queryProjectsSlugs = gql`
  query GET_PROJECTS_SLUGS(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $orderBy: PostObjectsConnectionOrderbyEnum = DATE
    $order: OrderEnum = DESC
  ) {
    ${archiveProjectsSlugs}
  }
`;

export default queryProjectsSlugs;
