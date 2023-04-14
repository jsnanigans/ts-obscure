# Path<T, P extends string>

Accesses deeply nested properties of an object type T using a dot-separated string path P.

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

type A = Path<X, 'c'>; // { d: number; e: string; }
type Y = Path<X, 'c.d'>; // number
type Z = Path<X, 'c.e'>; // string
type Er = Path<X, 'c.f'>; // never
```

