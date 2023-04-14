# AsyncReturnType<T>

Obtains the return type of an asynchronous function type T.

## Example
```ts
type Fn = (a: number, b: string) => Promise<boolean>
type Unpromisified = AsyncReturnType<Fn> // boolean
```

