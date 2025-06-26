import type ts from "typescript";

import type { LibraryCall } from "../util";

export interface NumberExtensions_Sqrt {
  kind: ts.SyntaxKind.BinaryExpression;
  left: 0;
  operatorToken: ts.SyntaxKind.AsteriskAsteriskToken;
  right: {
    kind: ts.SyntaxKind.NumericLiteral;
    value: 0.5;
  };
}

export type NumberExtensions_Floor = LibraryCall<"math", "floor", true>;
export type NumberExtensions_Ceil = LibraryCall<"math", "ceil", true>;
export type NumberExtensions_Round = LibraryCall<"math", "round", true>;
export type NumberExtensions_Abs = LibraryCall<"math", "abs", true>;
export type NumberExtensions_Map = LibraryCall<"math", "map", true>;

declare global {
  export interface Number {
    /** @metadata ast-macro {@link NumberExtensions_Sqrt ast-macro-target} */
    sqrt(this: number): number;
    /** @metadata ast-macro {@link NumberExtensions_Floor ast-macro-target} */
    floor(this: number): number;
    /** @metadata ast-macro {@link NumberExtensions_Ceil ast-macro-target} */
    ceil(this: number): number;
    /** @metadata ast-macro {@link NumberExtensions_Round ast-macro-target} */
    round(this: number): number;
    /** @metadata ast-macro {@link NumberExtensions_Abs ast-macro-target} */
    abs(this: number): number;
    /** @metadata ast-macro {@link NumberExtensions_Map ast-macro-target} */
    map(this: number, minIn: number, maxIn: number, minOut: number, maxOut: number): number;
  }
}