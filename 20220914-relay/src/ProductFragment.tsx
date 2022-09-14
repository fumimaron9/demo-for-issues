import { graphql } from 'relay-runtime'

graphql`
  fragment ProductFragment on Query
  @inline
  @refetchable(queryName: "ProductConnection")
  @argumentDefinitions(
    after: { type: String, defaultValue: "" }
    before: { type: String, defaultValue: "" }
    first: { type: Int, defaultValue: 10 }
    last: { type: Int, defaultValue: 10 }
  ) {
    products(after: $after, before: $before, first: $first, last: $last) @connection(key: "ProductFragment__products") {
      edges {
        node {
          id
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`
