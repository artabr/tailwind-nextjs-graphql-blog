import authorPostFields from '@/lib/wordpress/partials/authorPostFields';
import featuredImagePostFields from '@/lib/wordpress/partials/featuredImagePostFields';
import globalPostFields from '@/lib/wordpress/partials/globalPostFields';
import { gql } from '@apollo/client';

// Fragment: retrieve single page fields.
export const singlePageFragment = gql`
  fragment SinglePageFields on Page {
    ${globalPostFields}
    ${authorPostFields}
    ${featuredImagePostFields}
  }
`;

// Query: retrieve page by specified identifier.
const queryPageById = gql`
  query GET_PAGE_BY_ID($id: ID!, $idType: PageIdType = URI, $imageSize: MediaItemSizeEnum = LARGE) {
    page(id: $id, idType: $idType) {
      ...SinglePageFields
      isPostsPage
    }
  }
  ${singlePageFragment}
`;

export default queryPageById;
