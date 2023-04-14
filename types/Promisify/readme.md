# Promisify<T>

Transforms a function type T that returns a value into a function type that returns a Promise of that value.

## Example
```ts
type Fn = (a: number, b: string) => boolean
type Promisified = Promisify<Fn> // (a: number, b: string) => Promise<boolean>
```
