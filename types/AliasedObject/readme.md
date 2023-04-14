# AliasedObject
Creates a new type with the same properties as `T` but with some of them renamed using the aliases provided in `K`.

## Usage
```ts
type User = {
  id: number;
  name: string;
  age: number;
  email: string;
  date: Date;
};

type SelectedUser = AliasedObject<User, ['id as userId', 'name', 'age', 'date as born']>;

const user: SelectedUser = {
  userId: 1,
  name: 'John',
  age: 20,
  born: new Date(),
};
```

