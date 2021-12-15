import archiveData from '@/lib/wordpress/partials/archiveData';
import featuredImagePostFields from '@/lib/wordpress/partials/featuredImagePostFields';
import globalPostFields from '@/lib/wordpress/partials/globalPostFields';
import tagsPostFields from '@/lib/wordpress/partials/tagsPostFields';
import { gql } from '@apollo/client';

// Fragment: retrieve archive project fields.
const archiveProjectFragment = gql`
  fragment ArchiveProjectFields on Project {
    ${globalPostFields}
    excerpt
    ${tagsPostFields}
    ${featuredImagePostFields}
  }
`;

// Query: retrieve projects archive.
const queryProjectsArchive = gql`
  query GET_PROJECTS_ARCHIVE(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $orderBy: PostObjectsConnectionOrderbyEnum = DATE
    $order: OrderEnum = DESC
    $imageSize: MediaItemSizeEnum = THUMBNAIL
  ) {
    projects(
      first: $first
      last: $last
      after: $after
      before: $before
      where: {orderby: {field: $orderBy, order: $order}}
    ) {
      ${archiveData}
      edges {
        node {
          ...ArchiveProjectFields
        }
      }
    }
  }
  ${archiveProjectFragment}
`;

export default queryProjectsArchive;
