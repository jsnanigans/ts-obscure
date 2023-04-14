# Getters<T>

Converts an object type T into a type with the same keys, but with all values wrapped in a function that returns that value.

## Example
```ts
type User = {
  id: number;
  name: string;
  age: number;
  email: string;
  date: Date;
};

type UserGetters = Getters<User>;

// output
type UserGetters = {
  id: () => number;
  name: () => string;
  age: () => number;
  email: () => string;
  date: () => Date;
};
```

