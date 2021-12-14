import archivePageInfo from '@/lib/wordpress/partials/archivePageInfo';
import featuredImagePostFields from '@/lib/wordpress/partials/featuredImagePostFields';
import globalPostFields from '@/lib/wordpress/partials/globalPostFields';
import { gql } from '@apollo/client';

// Fragment: retrieve archive post fields.
export const archivePostFragment = gql`
  fragment ArchivePostFields on Post {
    ${globalPostFields}
    excerpt
    ${featuredImagePostFields}
  }
`;

// Query partial: retrieve archive fields.
export const archivePosts = `
  posts(
    first: $first
    last: $last
    after: $after
    before: $before
    where: {orderby: {field: $orderBy, order: $order}}
  ) {
    ${archivePageInfo}
    edges {
      node {
        ...ArchivePostFields
      }
    }
  }
`;

// Query: retrieve posts archive.
const queryPostsArchive = gql`
  query GET_POSTS_ARCHIVE(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $orderBy: PostObjectsConnectionOrderbyEnum = DATE
    $order: OrderEnum = DESC
    $imageSize: MediaItemSizeEnum = THUMBNAIL
  ) {
    ${archivePosts}
  }
  ${archivePostFragment}
`;

export default queryPostsArchive;
