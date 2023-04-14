# Diff<T, U>

Computes the set difference of two object types T and U.

## Example
```ts
type X = {
  a: number;
  b: string;
  c: boolean;
};

type Y = {
  b: number;
  c: string;
};

type XY = Diff<X, Y>; // { a: number; }
type YX = Diff<Y, X>; // { b: number; c: string; }
type XX = Diff<X, X>; // {}
type YZ = Diff<Y, {}>; // { b: number; c: string; }
```

