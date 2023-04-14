# Merge<T>

Merges an intersection type `T` into a single object type.

## Usage
```ts
type User = {
  id: number;
  name: string;
  age: number;
  email: string;
  date: Date;
};

type SelectedUser = Merge<User & { name: string; age: number; born: Date }>;


// output
type SelectedUser = {
  id: number;
  name: string;
  age: number;
  email: string;
  date: Date;
  born: Date;
};
```
