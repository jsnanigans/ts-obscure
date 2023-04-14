# OptionalKeys<T> 

Extracts the optional property keys of a type T.

## Example
```ts
type User = {
  id: number;
  name: string;
  age?: number;
  email?: string;
  date?: Date;
};

type UserOptionalKeys = OptionalKeys<User>;

// output
type UserOptionalKeys = 'age' | 'email' | 'date';
```

