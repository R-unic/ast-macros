import type ts from "typescript";

import type { LibraryCall, Identifier, NumberLiteral } from "../util";

export type Vector3Extensions_DistanceFrom = LibraryCall<"vector", "magnitude", [{
  kind: ts.SyntaxKind.CallExpression;
  arguments: [1];
  expression: {
    kind: ts.SyntaxKind.PropertyAccessExpression;
    expression: 0;
    name: Identifier<"sub">;
  };
}]>

type VectorXZ = LibraryCall<"vector", "create", [NumberLiteral<1>, NumberLiteral<0>, NumberLiteral<1>]>;
export type Vector3Extensions_FlatDistanceFrom = LibraryCall<"vector", "magnitude", [{
  kind: ts.SyntaxKind.CallExpression;
  arguments: [{
    kind: ts.SyntaxKind.CallExpression;
    arguments: [VectorXZ];
    expression: {
      kind: ts.SyntaxKind.PropertyAccessExpression;
      expression: 1;
      name: Identifier<"mul">;
    };
  }];
  expression: {
    kind: ts.SyntaxKind.PropertyAccessExpression;
    expression: {
      kind: ts.SyntaxKind.CallExpression;
      arguments: [VectorXZ];
      expression: {
        kind: ts.SyntaxKind.PropertyAccessExpression;
        expression: 0;
        name: Identifier<"mul">;
      };
    };
    name: Identifier<"sub">;
  };
}]>

declare global {
  // static
  export interface Vector3Constructor {

  }

  // instance
  export interface Vector3 {
    /** @metadata ast-macro {@link Vector3Extensions_DistanceFrom ast-macro-target} */
    DistanceFrom(this: Vector3, other: Vector3): number;
    /** @metadata ast-macro {@link Vector3Extensions_FlatDistanceFrom ast-macro-target} */
    FlatDistanceFrom(this: Vector3, other: Vector3): number;
  }
}