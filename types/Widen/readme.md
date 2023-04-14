# Widen<T>

Widens the type of a type T by allowing it to also be null and undefined.

## Example
```ts
type X = {
  a: number;
  b: string;
};

type Y = Widen<X>; // { a: number; b: string; } | null | undefined
```

