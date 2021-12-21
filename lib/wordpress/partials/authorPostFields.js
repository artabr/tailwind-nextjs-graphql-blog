// Query partial: retrieve author post fields.
const authorPostFields = `
  author {
    node {
      slug
      nickname
      name
      email
      description
      avatar {
        url
      }
    }
  }
`;
export default authorPostFields;
