// DeepReadonly
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends (infer U)[]
    ? DeepReadonly<U>[]
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepReadonly<U>>
    : DeepReadonly<T[P]>;
};
