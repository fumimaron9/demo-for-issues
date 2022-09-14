/**
 * @generated SignedSource<<9ccf2a8f542526db2a600b5bf1df5a0d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomePageQuery$variables = {};
export type HomePageQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ProductFragment">;
};
export type HomePageQuery = {
  response: HomePageQuery$data;
  variables: HomePageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
v1 = [
  {
    "kind": "Literal",
    "name": "after",
    "value": ""
  },
  {
    "kind": "Literal",
    "name": "before",
    "value": ""
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "last",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomePageQuery",
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
            "selections": (v0/*: any*/),
            "storageKey": null
          }
        ],
        "args": null,
        "argumentDefinitions": [
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
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomePageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ProductConnection",
        "kind": "LinkedField",
        "name": "products",
        "plural": false,
        "selections": (v0/*: any*/),
        "storageKey": "products(after:\"\",before:\"\",first:10,last:10)"
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "ProductFragment__products",
        "kind": "LinkedHandle",
        "name": "products"
      }
    ]
  },
  "params": {
    "cacheID": "6df330e02a08cd11c7a6219741e998cb",
    "id": null,
    "metadata": {},
    "name": "HomePageQuery",
    "operationKind": "query",
    "text": "query HomePageQuery {\n  ...ProductFragment\n}\n\nfragment ProductFragment on Query {\n  products(after: \"\", before: \"\", first: 10, last: 10) {\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "454704127432a16834c74d3476e88797";

export default node;
