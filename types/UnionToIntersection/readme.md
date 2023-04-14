# UnionToIntersection<U>

Converts a union type `U` into an intersection type

## Example

```ts
type User = {
  id: number;
  name: string;
  age: number;
  email: string;
  date: Date;
};

type SelectedUser = UnionToIntersection<User | { name: string; age: number; born: Date }>;

// output
type SelectedUser = {
  id: number;
  name: string;
  age: number;
  email: string;
  date: Date;
} & {
  name: string;
  age: number;
  born: Date;
};
```
