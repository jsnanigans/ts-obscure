import { Merge } from "../Merge";
import { UnionToIntersection } from "../UnionToIntersection";

type ExtractStringKeys<T> = {
  [K in keyof T]: K extends string ? K : never;
}[keyof T];

type ValidKeys<O> = ExtractStringKeys<O> | `${ExtractStringKeys<O>} as ${string}`;

export type AliasedObject<O, KA extends ValidKeys<O>[]> = Merge<
  UnionToIntersection<
    {
      [K in KA[number]]: K extends `${infer C} as ${infer A}`
        ? C extends keyof O
          ? { [P in A]: O[C] }
          : never
        : K extends keyof O
        ? { [P in K]: O[K] }
        : never;
    }[KA[number]]
  >
>;

