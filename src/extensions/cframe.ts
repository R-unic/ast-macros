import type ts from "typescript";

interface Identifier<T extends string> {
  readonly kind: ts.SyntaxKind.Identifier;
  readonly text: T;
}

interface MathMapping<Name extends keyof typeof math, ArgumentList> {
  readonly arguments: ArgumentList;
  readonly expression: {
    readonly expression: Identifier<"math">;
    readonly kind: ts.SyntaxKind.PropertyAccessExpression;
    readonly name: Identifier<Name>;
  };
  readonly kind: ts.SyntaxKind.CallExpression;
}

interface CFrameExtensions_DegAngles {
  readonly arguments: [MathMapping<"rad", [0]>, MathMapping<"rad", [1]>, MathMapping<"rad", [2]>];
  readonly expression: {
    readonly expression: Identifier<"CFrame">;
    readonly kind: ts.SyntaxKind.PropertyAccessExpression;
    readonly name: Identifier<"Angles">;
  };
  readonly kind: ts.SyntaxKind.CallExpression;
}

declare global {
  // static
  interface CFrameConstructor {
    /** @metadata ast-macro {@link CFrameExtensions_DegAngles ast-macro-target} */
    DegAngles(rX: number, rY: number, rZ: number): CFrame;

  }

  // instance
  interface CFrame {

  }
}