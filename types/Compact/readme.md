# Compact<T>

Filters out null and undefined values from a union type T.

## Example
```ts
type X = null | undefined | number | string
type C = Compact<X>; // number | string
```

