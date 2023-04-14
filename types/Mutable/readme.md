# Mutable<T>

Makes all properties of a type T mutable (opposite of Readonly<T>)

## Example

```ts

type User = Readonly<{
  id?: number;
  name?: string;
  age?: number;
  email?: string;
  date: Date;
}>;

type MutableUser = Mutable<User>;

const user: MutableUser = {
  date: new Date(),
};

user.date = new Date(); // no error
```
