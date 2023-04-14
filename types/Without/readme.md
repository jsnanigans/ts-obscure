# Without<T, U>

Removes properties of type U from an object type T.


## Example
```ts
type X = {
  a: number;
  b: string;
  c: boolean;
};

type Y = Without<X, 'a' | 'b'>; // { c: boolean; }
type Z = Without<X, 'a' | 'b' | 'c'>; // {}
type W = Without<X, 'a'>; // { b: string; c: boolean; }
```

