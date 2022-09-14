import { graphql } from 'relay-runtime'

graphql`
  query HomePageQuery {
    ...ProductFragment
  }
`
