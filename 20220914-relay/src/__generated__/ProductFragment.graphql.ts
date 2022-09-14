/**
 * @generated SignedSource<<8a9be2df429925f33866a7a5076245ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProductFragment$data = {
  readonly products: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
      };
    }>;
    readonly pageInfo: {
      readonly endCursor: string | null;
      readonly hasNextPage: boolean;
      readonly hasPreviousPage: boolean;
      readonly startCursor: string | null;
    };
  };
  readonly " $fragmentType": "ProductFragment";
};
export type ProductFragment$key = {
  readonly " $data"?: ProductFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProductFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "ProductFragment"
};

(node as any).hash = "c936661d6054138891c3cc98281a01b7";

export default node;
