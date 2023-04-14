# IfEquals<T, U, Y, N>

Compares two types T and U. If they are equal, returns type Y, otherwise returns type N.

## Example
```ts
type X = IfEquals<1, 1, 'yes', 'no'>; // 'yes'
type Y = IfEquals<1, 2, 'yes', 'no'>; // 'no'

type Z = IfEquals<1, 1, true, false>; // true
type W = IfEquals<1, 2, true, false>; // false
```

