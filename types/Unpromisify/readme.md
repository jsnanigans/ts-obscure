# Unpromisify<T>

Extracts the type T from a Promise<T>.


## Example
```ts
type Fn = (a: number, b: string) => Promise<boolean>
type Unpromisified = Unpromisify<Fn> // (a: number, b: string) => boolean
```

