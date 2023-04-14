# Overwrite<T>

Overwrites the properties of type T with the properties of type U.

## Example
```ts
type X = {
  a: number;
  b: string;
};

type Y = {
  b: number;
};

type XY = Overwrite<X, Y>; // { a: number; b: number; }
```

