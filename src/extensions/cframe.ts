import type ts from "typescript";

import type { Identifier, LibraryCall } from "../util";

export interface CFrameExtensions_DegAngles {
  readonly arguments: [LibraryCall<"math", "rad", [0]>, LibraryCall<"math", "rad", [1]>, LibraryCall<"math", "rad", [2]>];
  readonly expression: {
    readonly expression: Identifier<"CFrame">;
    readonly kind: ts.SyntaxKind.PropertyAccessExpression;
    readonly name: Identifier<"Angles">;
  };
  readonly kind: ts.SyntaxKind.CallExpression;
}

declare global {
  // static
  export interface CFrameConstructor {
    /**
     * Create a rotational CFrame from the given angles, in degrees
     *
     * @metadata ast-macro {@link CFrameExtensions_DegAngles ast-macro-target}
     */
    DegAngles(rX: number, rY: number, rZ: number): CFrame;
  }

  // instance
  export interface CFrame {

  }
}