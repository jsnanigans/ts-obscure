# DeepRequired<T>

Makes all properties of a type T required, including nested properties.

## Example
```ts
type X = {
  a?: {
    b?: {
      c?: number;
    };
  };
};

type Y = DeepRequired<X>; // { a: { b: { c: number; }; }; }
```
