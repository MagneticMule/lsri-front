export const ALL_WP_POSTS_QUERY = graphql `
    query allWordpressPost {
      edges {
        node {
          id
          slug
          title
          status
          format
          content
          date
          author {
            name
          }
        }
      }
    }
`;

export const ALL_WP_PAGES_QUERY = graphql `
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;