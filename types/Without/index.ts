export type Without<T, U> = {
  [P in keyof T]: T[P] extends U ? never : P;
}[keyof T];
