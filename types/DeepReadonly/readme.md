# DeepReadonly<T>

Makes all properties of a type `T` readonly, including nested properties.

## Example

```ts

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    name: string;
    age: number; 
  };
  tags: string[];
}

type DeepReadonlyTodo = DeepReadonly<Todo>;

// output
type DeepReadonlyTodo = {
  readonly title: string;
  readonly description: string;
  readonly completed: DeepReadonly<boolean>;
  readonly meta: DeepReadonly<{
      name: string;
      age: number;
  }>;
  readonly tags: string[];
}
```
