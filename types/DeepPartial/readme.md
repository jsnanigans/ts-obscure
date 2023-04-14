# DeepPartial<T>

Makes all properties of a type `T` optional, including nested properties.

## Usage

```ts

type Foo = {
  a: string;
  b: number;
  c: {
    d: string;
    e: number;
  };
  f: string[];
  g: {
    h: string;
    i: number;
  }[];
};

type FooPartial = DeepPartial<Foo>;

// output
type FooPartial = {
  a?: string | undefined;
  b?: number | undefined;
  c?: DeepPartial<{
      d: string;
      e: number;
  }> | undefined;
  f?: string[] | undefined;
  g?: DeepPartial<{
      h: string;
      i: number;
  }>[] | undefined;
}

```
