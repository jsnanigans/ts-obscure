# ConstructorParameters<T>

Obtains the parameter types of a constructor function type T.


## Example
```ts
class C {
  constructor(a: number, b: string, c?: {
    d: boolean;
    e: Date;
  }) {}
}

type T0 = ConstructorParameters<typeof C>;

// output
type T0 = [number, string, {
    d: boolean;
    e: Date;
} | undefined]
```

