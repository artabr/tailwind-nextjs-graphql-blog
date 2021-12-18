import authorPostFields from '@/lib/wordpress/partials/authorPostFields';
import categoriesPostFields from '@/lib/wordpress/partials/categoriesPostFields';
import featuredImagePostFields from '@/lib/wordpress/partials/featuredImagePostFields';
import globalPostFields from '@/lib/wordpress/partials/globalPostFields';
import tagsPostFields from '@/lib/wordpress/partials/tagsPostFields';
import { gql } from '@apollo/client';

// Fragment: retrieve single post fields.
const singlePostFragment = gql`
  fragment SinglePostFields on Post {
    ${globalPostFields}
    excerpt
    content
    ${authorPostFields}
    ${featuredImagePostFields}
    ${tagsPostFields}
    ${categoriesPostFields}
  }
`;

// Query: retrieve post by specified identifier.
const queryPostById = gql`
  query GET_POST_BY_ID(
    $id: ID!
    $idType: PostIdType = SLUG
    $imageSize: MediaItemSizeEnum = LARGE
  ) {
    post(id: $id, idType: $idType) {
      ...SinglePostFields
    }
  }
  ${singlePostFragment}
`;

export default queryPostById;
