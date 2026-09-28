export type SortValue = string | number | bigint | boolean | Date | null | undefined;

export type Predicate<T> = (value: T, index: number, array: readonly T[]) => boolean;

export type TypeGuardPredicate<T, S extends T> = (value: T, index: number, array: readonly T[]) => value is S;

export type Selector<T, K extends PropertyKey = PropertyKey> = (value: T, index: number, array: readonly T[]) => K;

export type Comparator<T> = (a: T, b: T) => number;

export type EqualityComparator<T> = (a: T, b: T) => boolean;

export type OrderDirection = 'asc' | 'desc';

export type Iteratee<T, R> = (value: T, index: number, array: readonly T[]) => R;

/** Returns a float in `[0, 1)`. Defaults to `Math.random`. */
export type RandomSource = () => number;
