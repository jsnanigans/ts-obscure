# Flatten<T>

Flattens a tuple type by removing nested tuple types.

## Example

```ts
type Arr = ['1', '2', ['3'], [['4']]];
type Result = Flatten<Arr>; // expected to be ['1', '2', '3', '4']
``` 
