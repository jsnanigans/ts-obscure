# AliasedObject<T>
Creates a new type with the same properties as `T` but with some of them renamed using the aliases provided in `K`.

## Example
```ts
type User = {
  id: number;
  name: string;
  age: number;
  email: string;
  date: Date;
};

type SelectedUser = AliasedObject<User, ['id as userId', 'name', 'age', 'date as born']>;

// output
type SelectedUser = {
  userId: number;
  name: string;
  age: number;
  born: Date;
};
```

