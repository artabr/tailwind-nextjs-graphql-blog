import { archivePostFragment, archivePosts } from '@/lib/wordpress/posts/queryPostsArchive';
import { gql } from '@apollo/client';

// Query: retrieve posts tag archive.
const queryPostsByTag = gql`
  query GET_POSTS_BY_TAG(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $orderBy: PostObjectsConnectionOrderbyEnum = DATE
    $order: OrderEnum = DESC
    $imageSize: MediaItemSizeEnum = THUMBNAIL
    $id: ID!
    $idType: TagIdType = SLUG
  ) {
    tag(id: $id, idType: $idType) {
      ${archivePosts}
    }
  }
  ${archivePostFragment}
`;

export default queryPostsByTag;
