import type ts from "typescript";

export interface NumberLiteral<N extends number> {
  readonly kind: ts.SyntaxKind.NumericLiteral;
  readonly value: N;
}

export interface Identifier<Text extends string> {
  readonly kind: ts.SyntaxKind.Identifier;
  readonly text: Text;
}

interface Libraries {
  math: typeof math;
  string: typeof string;
  table: typeof table;
  vector: typeof vector;
  task: typeof task;
  os: typeof os;
}

export interface LibraryCall<
  LibraryName extends "math" | "string" | "table" | "vector" | "task" | "os",
  Name extends keyof Libraries[LibraryName] & string,
  Arguments
> {
  kind: ts.SyntaxKind.CallExpression;
  arguments: Arguments;
  expression: {
    kind: ts.SyntaxKind.PropertyAccessExpression;
    expression: Identifier<LibraryName>;
    name: Identifier<Name>;
  };
}
