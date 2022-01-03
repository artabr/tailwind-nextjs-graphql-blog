import authorPostFields from '@/lib/wordpress/partials/authorPostFields';
import categoriesPostFields from '@/lib/wordpress/partials/categoriesPostFields';
import featuredImagePostFields from '@/lib/wordpress/partials/featuredImagePostFields';
import globalPostFields from '@/lib/wordpress/partials/globalPostFields';
import tagsPostFields from '@/lib/wordpress/partials/tagsPostFields';
import { gql } from '@apollo/client';

// Fragment: retrieve single post fields.
const singleProjectFragment = gql`
  fragment SingleProjectFields on Project {
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
const queryProjectById = gql`
  query GET_PROJECT_BY_ID(
    $id: ID!
    $idType: ProjectIdType = SLUG
    $imageSize: MediaItemSizeEnum = LARGE
  ) {
    project(id: $id, idType: $idType) {
      ...SingleProjectFields
    }
  }
  ${singleProjectFragment}
`;

export default queryProjectById;
