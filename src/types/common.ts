export type SortValue = string | number | bigint | boolean | Date | null | undefined;

export type Predicate<T> = (value: T, index: number, array: readonly T[]) => boolean;

export type Selector<T, K extends PropertyKey = PropertyKey> = (value: T, index: number, array: readonly T[]) => K;

export type Comparator<T> = (a: T, b: T) => number;
