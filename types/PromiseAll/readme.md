# PromiseAll<T extends any[]>

Maps an array of Promise types to an array of their resolved types, similar to the behavior of Promise.all().


## Example
```ts
type Arr = [Promise<'1'>, Promise<'2'>, Promise<'3'>];
type Result = PromiseAll<Arr>; // expected to be ['1', '2', '3']
```

