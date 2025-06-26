import type ts from "typescript";

import type { MathMapping } from "../util";

interface NumberExtensions_Sqrt {
  kind: ts.SyntaxKind.BinaryExpression;
  left: 0;
  operatorToken: ts.SyntaxKind.AsteriskAsteriskToken;
  right: {
    kind: ts.SyntaxKind.NumericLiteral;
    value: 0.5;
  };
}

type NumberExtensions_Floor = MathMapping<"floor", true>;
type NumberExtensions_Ceil = MathMapping<"ceil", true>;
type NumberExtensions_Round = MathMapping<"round", true>;
type NumberExtensions_Abs = MathMapping<"abs", true>;
type NumberExtensions_Map = MathMapping<"map", true>;

declare global {
  interface Number {
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