export type DeepMerge<T, U> = T extends object
? U extends object
  ? { [K in keyof T | keyof U]: K extends keyof T & keyof U ? DeepMerge<T[K], U[K]> : K extends keyof T ? T[K] : U[K] }
  : T
: U;
