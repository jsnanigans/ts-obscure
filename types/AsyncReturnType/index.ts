export type AsyncReturnType<T extends (...args: any[]) => any> =
  ReturnType<T> extends Promise<infer U> ? U : never;
