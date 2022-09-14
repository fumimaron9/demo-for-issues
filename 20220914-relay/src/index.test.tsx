import { fetchQuery } from 'react-relay'
import { readInlineData } from 'relay-runtime'
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils'
import homePageQuery, { HomePageQuery } from './__generated__/HomePageQuery.graphql'
import productFragment, { ProductFragment$key } from './__generated__/ProductFragment.graphql'

describe('desc', () => {
  const mockResponse = {
    edges: [
      {
        node: {
          id: 'mock_1',
        },
      },
    ],
  }

  test('test', async () => {
    const environment = createMockEnvironment()

    environment.mock.queueOperationResolver((operation) =>
      MockPayloadGenerator.generate(operation, {
        ProductConnection: () => mockResponse,
      })
    )

    const query = await fetchQuery<HomePageQuery>(environment, homePageQuery, {}).toPromise()

    const data = readInlineData<ProductFragment$key>(productFragment, query)

    expect(data.products.edges[0].node.id).toBe(mockResponse.edges[0].node.id)
  })
})
