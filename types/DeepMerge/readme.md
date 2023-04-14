# DeepMerge<T, U>

Deeply merges two object types, recursively merging nested properties.

## Example
```ts
type X = {
  a: number;
  b: string;
  c: {
    d: number;
    e: string;
  };
};

type Y = {
  b: number;
  c: {
    e: number;
  };
};

type XY = DeepMerge<X, Y>;

// output
type XY = {
  a: number;
  b: number;
  c: {
    d: number;
    e: number;
  };
}
```

