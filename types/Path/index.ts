export type Path<T, P extends string> = P extends keyof T
  ? T[P]
  : P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? Path<T[K], Rest>
    : never
  : never;
