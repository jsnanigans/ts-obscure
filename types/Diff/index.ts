export type Diff<T, U> = Omit<T, keyof U> & Omit<U, keyof T>;
