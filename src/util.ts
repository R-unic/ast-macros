import type ts from "typescript";

export interface NumberLiteral<N extends number> {
  readonly kind: ts.SyntaxKind.NumericLiteral;
  readonly value: N;
}

export interface Identifier<Text extends string> {
  readonly kind: ts.SyntaxKind.Identifier;
  readonly text: Text;
}
export interface MathMapping<Name extends keyof typeof math, Arguments> {
  kind: ts.SyntaxKind.CallExpression;
  arguments: Arguments;
  expression: {
    kind: ts.SyntaxKind.PropertyAccessExpression;
    expression: Identifier<"math">;
    name: Identifier<Name>;
  };
}
