/**
 * @generated SignedSource<<dddbe91f9c4f68d261bc5974577af5cc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProductConnection$variables = {
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
};
export type ProductConnection$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ProductFragment">;
};
export type ProductConnection = {
  response: ProductConnection$data;
  variables: ProductConnection$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "before"
  },
  {
    "defaultValue": 10,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": 10,
    "kind": "LocalArgument",
    "name": "last"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ProductEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cursor",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "endCursor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasNextPage",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasPreviousPage",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "startCursor",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "before",
    "variableName": "before"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "last",
    "variableName": "last"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProductConnection",
    "selections": [
      {
        "kind": "InlineDataFragmentSpread",
        "name": "ProductFragment",
        "selections": [
          {
            "alias": "products",
            "args": null,
            "concreteType": "ProductConnection",
            "kind": "LinkedField",
            "name": "__ProductFragment__products_connection",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": null
          }
        ],
        "args": (v2/*: any*/),
        "argumentDefinitions": (v0/*: any*/)
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProductConnection",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "ProductConnection",
        "kind": "LinkedField",
        "name": "products",
        "plural": false,
        "selections": (v1/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "ProductFragment__products",
        "kind": "LinkedHandle",
        "name": "products"
      }
    ]
  },
  "params": {
    "cacheID": "3fcfdea673a81b7c78dc0e7493471a6c",
    "id": null,
    "metadata": {},
    "name": "ProductConnection",
    "operationKind": "query",
    "text": "query ProductConnection(\n  $after: String = \"\"\n  $before: String = \"\"\n  $first: Int = 10\n  $last: Int = 10\n) {\n  ...ProductFragment_pbnwq\n}\n\nfragment ProductFragment_pbnwq on Query {\n  products(after: $after, before: $before, first: $first, last: $last) {\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c936661d6054138891c3cc98281a01b7";

export default node;
