# FunctionKeys<T>

Extracts the keys of a type T whose values are functions.

## Example
```ts
type User = {
  id: number;
  name: string;
  age: number;
  email: string;
  date: Date;
  getName: () => string;
  getAge: () => number;
  getEmail: () => string;
  getDate: () => Date;
};

type UserFunctionKeys = FunctionKeys<User>;

// output
type UserFunctionKeys = 'getName' | 'getAge' | 'getEmail' | 'getDate';
```

