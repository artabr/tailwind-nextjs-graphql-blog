import archivePageInfo from '@/lib/wordpress/partials/archivePageInfo';
import { gql } from '@apollo/client';

// Query partial: retrieve tags archive fields.
export const archiveTags = `
tags {
    ${archivePageInfo}
    edges {
      node {
        name
        slug
        count
      }
    }
  }
`;

// Query: retrieve tags archive.
const queryAllTagsArchive = gql`
  query GET_ALL_TAGS_ARCHIVE {
    ${archiveTags}
  }
`;

export default queryAllTagsArchive;
