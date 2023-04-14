export type Getters<T> = {
  [K in keyof T]: () => T[K];
};
