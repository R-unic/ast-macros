import type ts from "typescript";

import type { Identifier, LibraryCall, NumberLiteral } from "../util";

// arr.size()
export interface ArraySize<A> {
  kind: ts.SyntaxKind.CallExpression;
  expression: {
    kind: ts.SyntaxKind.PropertyAccessExpression;
    expression: A;
    name: Identifier<"size">;
  };
}

// arr[0]
export interface ArrayExtensions_First {
  kind: ts.SyntaxKind.ElementAccessExpression;
  expression: 0;
  argumentExpression: NumberLiteral<0>;
}

// arr[arr.size() - 1]
export interface ArrayExtensions_Last {
  $vars: {
    _array: 0;
  };

  kind: ts.SyntaxKind.ElementAccessExpression;
  expression: "_array";
  argumentExpression: {
    kind: ts.SyntaxKind.BinaryExpression;
    left: ArraySize<"_array">;
    operatorToken: ts.SyntaxKind.MinusToken;
    right: NumberLiteral<1>;
  };
}

// [...new Set(arr)]
export interface ArrayExtensions_Distinct {
  kind: ts.SyntaxKind.ArrayLiteralExpression;
  elements: [{
    kind: ts.SyntaxKind.SpreadElement;
    expression: {
      kind: ts.SyntaxKind.NewExpression;
      arguments: [0];
      expression: Identifier<"Set">;
    }
  }];
}

// arr[math.random(1, arr.size()) - 1]
export interface ArrayExtensions_Random {
  $vars: {
    _array: 0;
  };

  kind: ts.SyntaxKind.ElementAccessExpression;
  expression: "_array";
  argumentExpression: {
    kind: ts.SyntaxKind.BinaryExpression;
    left: LibraryCall<"math", "random", [NumberLiteral<1>, ArraySize<"_array">]>;
    operatorToken: ts.SyntaxKind.MinusToken;
    right: NumberLiteral<1>;
  };
}

declare global {
  export interface ReadonlyArray<T> {
    /**
     * Returns the first element of the array, or `undefined` if the array is empty.
     *
     * @metadata ast-macro {@link ArrayExtensions_First ast-macro-target}
     * @returns The first element or `undefined`.
     * @example
     * [1, 2, 3].first(); // 1
     * [].first(); // undefined
     */
    first(this: ReadonlyArray<T>): this[0] | undefined;

    /**
     * Returns the last element of the array, or `undefined` if the array is empty.
     *
     * @metadata ast-macro {@link ArrayExtensions_Last ast-macro-target}
     * @returns The last element or `undefined`.
     * @example
     * [1, 2, 3].last(); // 3
     * [].last(); // undefined
     */
    last(this: ReadonlyArray<T>): T | undefined;

    /**
     * Returns a new array with duplicate elements removed, preserving the original order.
     *
     * @metadata ast-macro {@link ArrayExtensions_Distinct ast-macro-target}
     * @returns A new array with unique elements.
     * @example
     * [1, 2, 2, 3].distinct(); // [1, 2, 3]
     */
    distinct(this: ReadonlyArray<T>): ReadonlyArray<T>;

    /**
     * Returns a random element from the array.
     *
     * @metadata ast-macro {@link ArrayExtensions_Random ast-macro-target}
     * @returns A randomly selected element.
     * @example
     * [1, 2, 3].random(); // could return 1, 2, or 3
     */
    random(this: ReadonlyArray<T>): T;
  }
}