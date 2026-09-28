# @devxbhuvn/array-fns

> Modern, **immutable**, dependency-free TypeScript array utilities — including great helpers for **arrays of objects**.

`@devxbhuvn/array-fns` gives you focused functions for searching, transforming, grouping, sorting, sampling, combining, and editing arrays. Every helper accepts `readonly` inputs, returns a new result, and **never mutates** the original array.

---

## ✨ Features

- 🧊 **Immutable by default** — inputs are never modified
- 🧠 **TypeScript-first** — generics, type-guard overloads, and shared types
- 📦 **Tree-shakeable** — ESM + CJS, `sideEffects: false`, deep imports
- 🔗 **Predictable equality** — SameValueZero for set/search helpers (`NaN` equals `NaN`)
- 🗺️ **Map + Record APIs** — pick the shape that fits your app
- 🎲 **Testable randomness** — inject `random?: () => number` into sample/shuffle helpers
- 🚫 **Zero runtime dependencies**

---

## 📦 Installation

```bash
npm install @devxbhuvn/array-fns
```

**Requirements:** Node.js **20+** (or a modern ES2020 browser).

### Deep imports

```ts
import { unique } from '@devxbhuvn/array-fns/unique';
```

### ESM

```ts
import { groupBy, orderBy, unique } from '@devxbhuvn/array-fns';
```

### CommonJS

```js
const { chunk, range } = require('@devxbhuvn/array-fns');
```

---

## 🚀 Quick start

```ts
import { groupBy, keyBy, orderBy, pluck, sumBy, unique } from '@devxbhuvn/array-fns';

type User = {
    id: number;
    name: string;
    team: string;
    score: number;
};

const users: User[] = [
    { id: 1, name: 'Maya', team: 'platform', score: 12 },
    { id: 2, name: 'Noah', team: 'design', score: 8 },
    { id: 3, name: 'Ava', team: 'platform', score: 15 },
    { id: 1, name: 'Maya', team: 'platform', score: 12 }
];

const deduped = unique(users, (user) => user.id);
const byTeam = groupBy(deduped, (user) => user.team);
const byId = keyBy(deduped, (user) => user.id);
const ranked = orderBy(deduped, [(user) => user.score], ['desc']);
const names = pluck(ranked, 'name');

console.log(byTeam.platform.length); // 2
console.log(byId[2]?.name); // Noah
console.log(ranked[0]?.name); // Ava
console.log(sumBy(deduped, (user) => user.score)); // 35
console.log(names); // ['Ava', 'Maya', 'Noah']
```

---

## 📚 Table of contents

- [✨ Features](#-features)
- [📦 Installation](#-installation)
- [🚀 Quick start](#-quick-start)
- [🧠 Core concepts](#-core-concepts)
- [🧩 Recipes](#-recipes)
- [🔍 Search & test](#search--test)
- [🔄 Transform & reduce](#transform--reduce)
- [✂️ Slice & split](#slice--split)
- [🧱 Structure & windows](#structure--windows)
- [🗂️ Arrays of objects](#arrays-of-objects)
- [🗺️ Map helpers](#map-helpers)
- [🔗 Set operations](#set-operations)
- [🧮 Aggregates & stats](#aggregates--stats)
- [✏️ Immutable edits](#immutable-edits)
- [🎲 Random](#random)
- [🛠️ Create](#create)
- [🔤 A–Z API index](#-az-api-index)
- [⚠️ Edge cases & errors](#️-edge-cases--errors)
- [🔁 Migrating from 1.x](#-migrating-from-1x)
- [📘 TypeScript types](#-typescript-types)
- [📤 Package output](#-package-output)
- [📄 License](#-license)

---

## 🧠 Core concepts

### Immutability

All helpers return new arrays/values. Nested **object references** are not deep-cloned.

```ts
import { reverse, sortBy } from '@devxbhuvn/array-fns';

const numbers = [3, 1, 2];
sortBy(numbers, (value) => value); // [1, 2, 3]
console.log(numbers); // [3, 1, 2] — unchanged
```

### Callback shape

Predicates, selectors, and mappers receive `(value, index, array)`.

```ts
import { map } from '@devxbhuvn/array-fns';

map([10, 20, 30], (value, index) => value + index); // [10, 21, 32]
```

### Equality (SameValueZero)

Set/search helpers (`unique`, `union`, `difference`, `intersection`, `includes`, …) use **SameValueZero**:
`NaN` equals `NaN`, and `+0` equals `-0`. Objects compare by **reference** unless you pass a selector / comparator.

```ts
import { includes, unique } from '@devxbhuvn/array-fns';

includes([1, NaN], NaN); // true
unique([{ id: 1 }, { id: 1 }]); // keeps both (different references)
unique([{ id: 1 }, { id: 1 }], (item) => item.id); // [{ id: 1 }]
```

### Records vs Maps

- `groupBy` / `keyBy` / `countBy` → null-prototype `Record` (string/number/symbol keys)
- `groupToMap` / `indexToMap` / `frequencies` → `Map` (any key type, SameValueZero)

### Optional RNG

`sample`, `sampleSize`, `shuffle`, and `sampleWeighted` accept an optional final `random?: () => number` (default `Math.random`) for deterministic tests.

---

## 🧩 Recipes

### Deduplicate objects by id

```ts
import { unique } from '@devxbhuvn/array-fns';

unique(users, (user) => user.id);
```

### Group, index, and rank

```ts
import { groupBy, keyBy, orderBy } from '@devxbhuvn/array-fns';

groupBy(users, (user) => user.team);
keyBy(users, (user) => user.id);
orderBy(users, [(user) => user.score], ['desc']);
```

### Pull fields / build lookups

```ts
import { pluck, zipObject } from '@devxbhuvn/array-fns';

pluck(users, 'name');
zipObject(['a', 'b'], [1, 2]); // { a: 1, b: 2 }
```

### Immutable list edits

```ts
import { insertAt, replace, splice } from '@devxbhuvn/array-fns';

insertAt(users, 0, newUser);
replace(users, (user) => user.id === 2, { ...users[1], score: 99 });
splice(ids, 1, 2, 9);
```

---

## 🔍 Search & test

### `filter`

Returns a filtered copy of the array.

```ts
function filter<T, S extends T>(array: readonly T[], predicate: TypeGuardPredicate<T, S>): S[];
function filter<T>(array: readonly T[], predicate: Predicate<T>): T[];
function filter<T>(array: readonly T[], predicate: Predicate<T>): T[];
```

**Notes:** Supports type-guard predicates for narrowing.

```ts
import { filter } from '@devxbhuvn/array-fns';

filter([1, 2, 3, 4], (v) => v % 2 === 0); // [2, 4]
```

### `find`

Returns the first value that matches a predicate.

```ts
function find<T, S extends T>(array: readonly T[], predicate: TypeGuardPredicate<T, S>): S | undefined;
function find<T>(array: readonly T[], predicate: Predicate<T>): T | undefined;
function find<T>(array: readonly T[], predicate: Predicate<T>): T | undefined;
```

**Notes:** Supports type-guard predicates. Missing → `undefined`.

```ts
import { find } from '@devxbhuvn/array-fns';

find([1, 2, 3], (v) => v > 1); // 2
```

### `findIndex`

Returns the index of the first element that matches the predicate.

```ts
function findIndex<T>(array: readonly T[], predicate: Predicate<T>, fromIndex = 0): number;
```

**Notes:** `fromIndex` clamps like native `findIndex`. Missing → `-1`.

```ts
import { findIndex } from '@devxbhuvn/array-fns';

findIndex(['a', 'b', 'c'], (v) => v === 'b'); // 1
```

### `findLast`

Returns the last value that matches a predicate.

```ts
function findLast<T, S extends T>(array: readonly T[], predicate: TypeGuardPredicate<T, S>): S | undefined;
function findLast<T>(array: readonly T[], predicate: Predicate<T>): T | undefined;
function findLast<T>(array: readonly T[], predicate: Predicate<T>): T | undefined;
```

**Notes:** Searches from the end. Supports type guards.

```ts
import { findLast } from '@devxbhuvn/array-fns';

findLast([1, 2, 3, 4], (v) => v % 2 === 0); // 4
```

### `findLastIndex`

Returns the last index that matches a predicate, or -1.

```ts
function findLastIndex<T>(array: readonly T[], predicate: Predicate<T>): number;
```

**Notes:** Missing → `-1`.

```ts
import { findLastIndex } from '@devxbhuvn/array-fns';

findLastIndex([1, 2, 3, 2], (v) => v === 2); // 3
```

### `findMap`

Maps each item and returns the first defined (non-`undefined`) result.

```ts
function findMap<T, R>(array: readonly T[], mapper: Iteratee<T, R | undefined>): R | undefined;
```

**Notes:** First non-`undefined` mapped value wins.

```ts
import { findMap } from '@devxbhuvn/array-fns';

findMap([1, 2, 3], (v) => (v > 1 ? v * 10 : undefined)); // 20
```

### `some`

Returns true when at least one value matches a predicate.

```ts
function some<T>(array: readonly T[], predicate: Predicate<T>): boolean;
```

**Notes:** Empty array → `false`.

```ts
import { some } from '@devxbhuvn/array-fns';

some([1, 2, 3], (v) => v === 2); // true
```

### `every`

Returns true when every value matches a predicate.

```ts
function every<T>(array: readonly T[], predicate: Predicate<T>): boolean;
```

**Notes:** Empty array → `true`.

```ts
import { every } from '@devxbhuvn/array-fns';

every([2, 4], (v) => v % 2 === 0); // true
```

### `none`

Returns true when no value matches the predicate.

```ts
function none<T>(array: readonly T[], predicate: Predicate<T>): boolean;
```

**Notes:** True when no item matches.

```ts
import { none } from '@devxbhuvn/array-fns';

none([1, 3, 5], (v) => v % 2 === 0); // true
```

### `includes`

Returns true when the array contains a value using SameValueZero equality.

```ts
function includes<T>(array: readonly T[], search: T, fromIndex = 0): boolean;
```

**Notes:** SameValueZero (`NaN` matches `NaN`).

```ts
import { includes } from '@devxbhuvn/array-fns';

includes([1, NaN], NaN); // true
```

### `includesAll`

Returns true when every search value is in the array (SameValueZero).

```ts
function includesAll<T>(array: readonly T[], values: readonly T[]): boolean;
```

**Notes:** Every search value must be present.

```ts
import { includesAll } from '@devxbhuvn/array-fns';

includesAll([1, 2, 3], [1, 3]); // true
```

### `includesAny`

Returns true when any search value is in the array (SameValueZero).

```ts
function includesAny<T>(array: readonly T[], values: readonly T[]): boolean;
```

**Notes:** At least one search value present.

```ts
import { includesAny } from '@devxbhuvn/array-fns';

includesAny([1, 2], [4, 2]); // true
```

### `indexOf`

Returns the first index of a value, or -1 when it is absent.

```ts
function indexOf<T>(array: readonly T[], search: T, fromIndex = 0): number;
```

**Notes:** SameValueZero. Missing → `-1`.

```ts
import { indexOf } from '@devxbhuvn/array-fns';

indexOf(['a', 'b', 'a'], 'a'); // 0
```

### `lastIndexOf`

Returns the last index of a value, or -1 when it is absent.

```ts
function lastIndexOf<T>(array: readonly T[], search: T, fromIndex = array.length - 1): number;
```

**Notes:** Searches from the end. Missing → `-1`.

```ts
import { lastIndexOf } from '@devxbhuvn/array-fns';

lastIndexOf(['a', 'b', 'a'], 'a'); // 2
```

### `first`

Returns the first element of an array, or `undefined` for an empty array.

```ts
function first<T>(array: readonly T[]): T | undefined;
```

**Notes:** Empty → `undefined`.

```ts
import { first } from '@devxbhuvn/array-fns';

first([10, 20]); // 10
```

### `last`

Returns the last element of an array or `undefined` if the array is empty.

```ts
function last<T>(array: readonly T[]): T | undefined;
```

**Notes:** Empty → `undefined`.

```ts
import { last } from '@devxbhuvn/array-fns';

last([10, 20]); // 20
```

### `at`

Returns the element at `index`, supporting negative indexes.

```ts
function at<T>(array: readonly T[], index: number): T | undefined;
```

**Notes:** Supports negative indexes. Out of range → `undefined`.

```ts
import { at } from '@devxbhuvn/array-fns';

at([10, 20, 30], -1); // 30
```

### `count`

Counts the number of items in an array that satisfy a predicate.

```ts
function count<T>(array: readonly T[], predicate: Predicate<T> = () => true): number;
```

**Notes:** Default predicate counts all items (`array.length`).

```ts
import { count } from '@devxbhuvn/array-fns';

count([1, 2, 3, 4], (v) => v % 2 === 0); // 2
```

### `countWhere`

Counts items that satisfy a predicate.

```ts
function countWhere<T>(array: readonly T[], predicate: Predicate<T>): number;
```

**Notes:** Same idea as `count` with a required predicate.

```ts
import { countWhere } from '@devxbhuvn/array-fns';

countWhere([1, 2, 3], (v) => v > 1); // 2
```

### `startsWith`

Returns true when `array` begins with `prefix` (SameValueZero).

```ts
function startsWith<T>(array: readonly T[], prefix: readonly T[]): boolean;
```

**Notes:** SameValueZero per prefix element.

```ts
import { startsWith } from '@devxbhuvn/array-fns';

startsWith([1, 2, 3], [1, 2]); // true
```

### `endsWith`

Returns true when `array` ends with `suffix` (SameValueZero).

```ts
function endsWith<T>(array: readonly T[], suffix: readonly T[]): boolean;
```

**Notes:** SameValueZero per suffix element.

```ts
import { endsWith } from '@devxbhuvn/array-fns';

endsWith([1, 2, 3], [2, 3]); // true
```

### `equals`

Shallow array equality using SameValueZero per index.

```ts
function equals<T>(first: readonly T[], second: readonly T[]): boolean;
```

**Notes:** Same length + SameValueZero per index (shallow).

```ts
import { equals } from '@devxbhuvn/array-fns';

equals([1, NaN], [1, NaN]); // true
```

### `binarySearch`

Binary search on an ascending sorted array.

```ts
function binarySearch<T>(array: readonly T[], value: T): number;
```

**Notes:** Assumes ascending sorted input. Missing value → `-1`.

```ts
import { binarySearch } from '@devxbhuvn/array-fns';

binarySearch([1, 3, 5, 7], 5); // 2
```

### `isEmpty`

Returns true when the array has no elements.

```ts
function isEmpty(array: readonly unknown[]): boolean;
```

**Notes:** `array.length === 0`.

```ts
import { isEmpty } from '@devxbhuvn/array-fns';

isEmpty([]); // true
```

### `isSorted`

Returns true when the array is sorted ascending (or by comparator).

```ts
function isSorted<T>(array: readonly T[], comparator?: Comparator<T>): boolean;
```

**Notes:** Checks non-decreasing order by default compare.

```ts
import { isSorted } from '@devxbhuvn/array-fns';

isSorted([1, 2, 2, 3]); // true
```

### `isSubset`

Returns true when every value in `subset` is in `array` (SameValueZero).

```ts
function isSubset<T>(subset: readonly T[], array: readonly T[]): boolean;
```

**Notes:** Every value of `subset` is in `array`.

```ts
import { isSubset } from '@devxbhuvn/array-fns';

isSubset([1, 2], [1, 2, 3]); // true
```

### `isSuperset`

Returns true when `array` contains every value in `subset` (SameValueZero).

```ts
function isSuperset<T>(array: readonly T[], subset: readonly T[]): boolean;
```

**Notes:** `array` contains every value of `subset`.

```ts
import { isSuperset } from '@devxbhuvn/array-fns';

isSuperset([1, 2, 3], [1, 2]); // true
```

## 🔄 Transform & reduce

### `map`

Returns a new array containing the mapped values.

```ts
function map<T, R>(array: readonly T[], mapper: (value: T, index: number, array: readonly T[]) => R): R[];
```

**Notes:** Immutable map with `(value, index, array)`.

```ts
import { map } from '@devxbhuvn/array-fns';

map([1, 2, 3], (v, i) => v + i); // [1, 3, 5]
```

### `flatMap`

Maps values and flattens one level of returned arrays.

```ts
function flatMap<T, R>(array: readonly T[], mapper: (value: T, index: number, array: readonly T[]) => R | readonly R[]): R[];
```

**Notes:** Flattens one level of returned arrays.

```ts
import { flatMap } from '@devxbhuvn/array-fns';

flatMap([1, 2], (v) => [v, v * 10]); // [1,10,2,20]
```

### `flatMapDeep`

Maps each value then fully flattens nested array results.

```ts
function flatMapDeep<T, R>(array: readonly T[], mapper: (value: T, index: number, array: readonly T[]) => R | readonly unknown[]): R[];
```

**Notes:** Map then fully flatten nested arrays.

```ts
import { flatMapDeep } from '@devxbhuvn/array-fns';

flatMapDeep([1, 2], (v) => [v, [v * 10]]); // [1,10,2,20]
```

### `compactMap`

Maps values and drops `null` / `undefined` results.

```ts
function compactMap<T, R>(array: readonly T[], mapper: Iteratee<T, R | null | undefined>): R[];
```

**Notes:** Map + drop `null`/`undefined` in one pass.

```ts
import { compactMap } from '@devxbhuvn/array-fns';

compactMap([1, 2, 3], (v) => (v % 2 ? v : null)); // [1, 3]
```

### `compact`

Removes falsy values from an array.

```ts
function compact<T>(array: readonly T[]): Array<Exclude<T, Falsy>>;
```

**Notes:** Removes falsy values (`false`, `0`, `''`, `null`, `undefined`, `NaN`, `0n`).

```ts
import { compact } from '@devxbhuvn/array-fns';

compact([0, 1, false, 2, '', 3]); // [1, 2, 3]
```

### `compactBy`

Removes values for which the predicate returns true.

```ts
function compactBy<T>(array: readonly T[], predicate: Predicate<T>): T[];
```

**Notes:** Opposite of `filter` when predicate means “drop me”.

```ts
import { compactBy } from '@devxbhuvn/array-fns';

compactBy([1, null, 2], (v) => v == null); // [1, 2]
```

### `flatten`

Flattens nested arrays to a given depth.

```ts
function flatten<T>(array: readonly unknown[], depth = 1): T[];
```

**Notes:** `depth` is a non-negative integer or `Infinity`.

```ts
import { flatten } from '@devxbhuvn/array-fns';

flatten([1, [2, [3]]], 1); // [1, 2, [3]]
```

### `flattenDeep`

Fully flattens nested arrays.

```ts
function flattenDeep<T>(array: readonly unknown[]): T[];
```

**Notes:** Same as `flatten(array, Infinity)`.

```ts
import { flattenDeep } from '@devxbhuvn/array-fns';

flattenDeep([1, [2, [3]]]); // [1, 2, 3]
```

### `reverse`

Returns a reversed copy without mutating the input.

```ts
function reverse<T>(array: readonly T[]): T[];
```

**Notes:** Does not mutate input.

```ts
import { reverse } from '@devxbhuvn/array-fns';

reverse([1, 2, 3]); // [3,2,1]
```

### `rotate`

Rotates values left by N positions without mutating the input.

```ts
function rotate<T>(array: readonly T[], positions: number): T[];
```

**Notes:** Positive = left rotate.

```ts
import { rotate } from '@devxbhuvn/array-fns';

rotate([1, 2, 3, 4], 1); // [2,3,4,1]
```

### `reduce`

`reduce` helper.

```ts
function reduce<T, R>(array: readonly T[], reducer: (accumulator: R, value: T, index: number, array: readonly T[]) => R, initialValue: R): R;
function reduce<T>(array: readonly T[], reducer: (accumulator: T, value: T, index: number, array: readonly T[]) => T): T;
function reduce<T, R>(array: readonly T[], reducer: (accumulator: R | T, value: T, index: number, array: readonly T[]) => R | T, initialValue?: R): R | T;
```

**Notes:** Throws on empty array without `initial`.

```ts
import { reduce } from '@devxbhuvn/array-fns';

reduce([1, 2, 3], (a, v) => a + v, 0); // 6
```

### `reduceRight`

`reduceRight` helper.

```ts
function reduceRight<T, R>(array: readonly T[], reducer: (accumulator: R, value: T, index: number, array: readonly T[]) => R, initialValue: R): R;
function reduceRight<T>(array: readonly T[], reducer: (accumulator: T, value: T, index: number, array: readonly T[]) => T): T;
function reduceRight<T, R>(array: readonly T[], reducer: (accumulator: R | T, value: T, index: number, array: readonly T[]) => R | T, initialValue?: R): R | T;
```

**Notes:** Right-to-left reduce. Same empty rules as `reduce`.

```ts
import { reduceRight } from '@devxbhuvn/array-fns';

reduceRight(['a', 'b'], (a, v) => a + v, ''); // 'ba'
```

### `reduceWhile`

Reduces while `predicate` remains true for the current accumulator and value. Stops before applying the reducer when the predicate fails.

```ts
function reduceWhile<T, R>(
```

**Notes:** Stops before reducer when predicate fails.

```ts
import { reduceWhile } from '@devxbhuvn/array-fns';

reduceWhile(
    [1, 2, 3, 4],
    (s, v) => s + v <= 6,
    (s, v) => s + v,
    0
); // 6
```

### `scan`

Like reduce, but returns the list of intermediate accumulator values.

```ts
function scan<T, R>(array: readonly T[], iteratee: (accumulator: R, value: T, index: number, array: readonly T[]) => R, initial: R): R[];
```

**Notes:** All intermediate accumulators.

```ts
import { scan } from '@devxbhuvn/array-fns';

scan([1, 2, 3], (s, v) => s + v, 0); // [1,3,6]
```

### `reject`

Returns values for which the predicate returns false.

```ts
function reject<T>(array: readonly T[], predicate: Predicate<T>): T[];
```

**Notes:** Inverse of `filter`.

```ts
import { reject } from '@devxbhuvn/array-fns';

reject([1, 2, 3, 4], (v) => v % 2 === 0); // [1, 3]
```

### `tap`

Invokes `interceptor` with a shallow copy for side effects and returns a new shallow copy.

```ts
function tap<T>(array: readonly T[], interceptor: (value: T[]) => void): T[];
```

**Notes:** Side-effect helper; returns a fresh shallow copy.

```ts
import { tap } from '@devxbhuvn/array-fns';

tap([1, 2], (copy) => console.log(copy));
```

## ✂️ Slice & split

### `take`

Returns the first N items from the array.

```ts
function take<T>(array: readonly T[], count = 1): T[];
```

**Notes:** `count` non-negative integer (default `1`).

```ts
import { take } from '@devxbhuvn/array-fns';

take([1, 2, 3], 2); // [1, 2]
```

### `takeRight`

Returns up to the last N values without mutating the input.

```ts
function takeRight<T>(array: readonly T[], count: number): T[];
```

**Notes:** Last N values.

```ts
import { takeRight } from '@devxbhuvn/array-fns';

takeRight([1, 2, 3, 4], 2); // [3, 4]
```

### `takeWhile`

Returns values from the start while a predicate remains true.

```ts
function takeWhile<T, S extends T>(array: readonly T[], predicate: TypeGuardPredicate<T, S>): S[];
function takeWhile<T>(array: readonly T[], predicate: Predicate<T>): T[];
function takeWhile<T>(array: readonly T[], predicate: Predicate<T>): T[];
```

**Notes:** Supports type-guard predicates.

```ts
import { takeWhile } from '@devxbhuvn/array-fns';

takeWhile([1, 1, 2, 3], (v) => v === 1); // [1, 1]
```

### `takeUntil`

Takes values until the predicate returns true (exclusive).

```ts
function takeUntil<T>(array: readonly T[], predicate: Predicate<T>): T[];
```

**Notes:** Stops before the matching element.

```ts
import { takeUntil } from '@devxbhuvn/array-fns';

takeUntil([1, 2, 3, 4], (v) => v === 3); // [1, 2]
```

### `takeLastWhile`

Returns values from the end while a predicate remains true.

```ts
function takeLastWhile<T>(array: readonly T[], predicate: Predicate<T>): T[];
```

**Notes:** Takes a trailing run while predicate holds.

```ts
import { takeLastWhile } from '@devxbhuvn/array-fns';

takeLastWhile([1, 2, 3, 4], (v) => v > 2); // [3,4]
```

### `drop`

Returns an array without the first N elements.

```ts
function drop<T>(array: readonly T[], count = 1): T[];
```

**Notes:** `count` must be a non-negative integer (default `1`).

```ts
import { drop } from '@devxbhuvn/array-fns';

drop([1, 2, 3], 2); // [3]
```

### `dropRight`

Returns the input without its last N values.

```ts
function dropRight<T>(array: readonly T[], count: number): T[];
```

**Notes:** Fractional counts truncate toward zero; negatives act like 0.

```ts
import { dropRight } from '@devxbhuvn/array-fns';

dropRight([1, 2, 3], 1); // [1, 2]
```

### `dropWhile`

Returns values after the initial values that match a predicate.

```ts
function dropWhile<T>(array: readonly T[], predicate: Predicate<T>): T[];
```

**Notes:** Drops a leading run while predicate is true.

```ts
import { dropWhile } from '@devxbhuvn/array-fns';

dropWhile([1, 1, 2, 3], (v) => v === 1); // [2, 3]
```

### `dropUntil`

Drops values until the predicate returns true, then returns the remainder including the match.

```ts
function dropUntil<T>(array: readonly T[], predicate: Predicate<T>): T[];
```

**Notes:** Keeps from the first match onward (inclusive).

```ts
import { dropUntil } from '@devxbhuvn/array-fns';

dropUntil([1, 2, 3, 4], (v) => v === 3); // [3, 4]
```

### `dropLastWhile`

Drops trailing values while a predicate remains true.

```ts
function dropLastWhile<T>(array: readonly T[], predicate: Predicate<T>): T[];
```

**Notes:** Drops from the end while predicate holds.

```ts
import { dropLastWhile } from '@devxbhuvn/array-fns';

dropLastWhile([1, 2, 3, 4], (v) => v > 2); // [1, 2]
```

### `initial`

Returns all elements except the last.

```ts
function initial<T>(array: readonly T[]): T[];
```

**Notes:** Empty / single-element → `[]`.

```ts
import { initial } from '@devxbhuvn/array-fns';

initial([1, 2, 3]); // [1, 2]
```

### `tail`

Returns all elements except the first.

```ts
function tail<T>(array: readonly T[]): T[];
```

**Notes:** Empty → `[]`.

```ts
import { tail } from '@devxbhuvn/array-fns';

tail([1, 2, 3]); // [2, 3]
```

### `splitAt`

Splits the array into `[left, right]` at `index`.

```ts
function splitAt<T>(array: readonly T[], index: number): [T[], T[]];
```

**Notes:** Index clamped for insert-style splits.

```ts
import { splitAt } from '@devxbhuvn/array-fns';

splitAt([1, 2, 3, 4], 2); // [[1,2],[3,4]]
```

### `splitWhen`

Splits at the first index where the predicate is true.

```ts
function splitWhen<T>(array: readonly T[], predicate: Predicate<T>): [T[], T[]];
```

**Notes:** Split before first matching index.

```ts
import { splitWhen } from '@devxbhuvn/array-fns';

splitWhen([1, 2, 3, 4], (v) => v === 3); // [[1,2],[3,4]]
```

### `span`

Returns `[prefix, rest]` where prefix is the longest takeWhile run.

```ts
function span<T>(array: readonly T[], predicate: Predicate<T>): [T[], T[]];
```

**Notes:** `[takeWhile(...), dropWhile(...)]`.

```ts
import { span } from '@devxbhuvn/array-fns';

span([1, 1, 2, 3], (v) => v === 1); // [[1,1],[2,3]]
```

### `partition`

Splits an array into two arrays based on a predicate.

```ts
function partition<T>(array: readonly T[], predicate: Predicate<T>): [T[], T[]];
```

**Notes:** Splits into `[pass, fail]` by predicate.

```ts
import { partition } from '@devxbhuvn/array-fns';

partition([1, 2, 3, 4], (v) => v % 2 === 0); // [[2,4],[1,3]]
```

## 🧱 Structure & windows

### `chunk`

Splits an array into chunks of the provided size.

```ts
function chunk<T>(array: readonly T[], size: number): T[][];
```

**Notes:** `size` must be a positive integer.

```ts
import { chunk } from '@devxbhuvn/array-fns';

chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
```

### `chunkBy`

Splits into runs of consecutive equal selector keys.

```ts
function chunkBy<T, K extends PropertyKey>(array: readonly T[], selector: Selector<T, K>): T[][];
```

**Notes:** Groups consecutive equal keys only (not global groupBy).

```ts
import { chunkBy } from '@devxbhuvn/array-fns';

chunkBy([1, 1, 2, 2, 1], (v) => v); // [[1,1],[2,2],[1]]
```

### `sliding`

Returns overlapping windows of `size` advancing by `step`. Partial trailing windows are omitted.

```ts
function sliding<T>(array: readonly T[], size: number, step = 1): T[][];
```

**Notes:** Omits trailing partial windows.

```ts
import { sliding } from '@devxbhuvn/array-fns';

sliding([1, 2, 3, 4], 2); // [[1,2],[2,3],[3,4]]
```

### `partitionBy`

Splits into consecutive runs keyed by the selector. Returns `[key, items]` tuples (different shape from `chunkBy`).

```ts
function partitionBy<T, K>(array: readonly T[], selector: Iteratee<T, K>): Array<[K, T[]]>;
```

**Notes:** Consecutive runs as `[key, items][]` (unlike `chunkBy`).

```ts
import { partitionBy } from '@devxbhuvn/array-fns';

partitionBy([1, 1, 2, 2], (v) => v); // [[1,[1,1]],[2,[2,2]]]
```

### `intersperse`

Inserts `separator` between adjacent elements.

```ts
function intersperse<T>(array: readonly T[], separator: T): T[];
```

**Notes:** Inserts separator between elements.

```ts
import { intersperse } from '@devxbhuvn/array-fns';

intersperse([1, 2, 3], 0); // [1, 0, 2, 0, 3]
```

### `interleave`

Weaves values from multiple arrays by index until the longest is exhausted.

```ts
function interleave(): [];
function interleave<T1>(a: readonly T1[]): T1[];
function interleave<T1, T2>(a: readonly T1[], b: readonly T2[]): Array<T1 | T2>;
function interleave<T1, T2, T3>(a: readonly T1[], b: readonly T2[], c: readonly T3[]): Array<T1 | T2 | T3>;
function interleave<T1, T2, T3, T4>(a: readonly T1[], b: readonly T2[], c: readonly T3[], d: readonly T4[]): Array<T1 | T2 | T3 | T4>;
```

**Notes:** Round-robins by index across inputs.

```ts
import { interleave } from '@devxbhuvn/array-fns';

interleave([1, 2], ['a', 'b', 'c']); // [1,'a',2,'b','c']
```

### `transpose`

Transposes a matrix (rows to columns). Ragged rows are truncated to the shortest row.

```ts
function transpose<T>(matrix: ReadonlyArray<readonly T[]>): T[][];
```

**Notes:** Ragged rows truncated to shortest length.

```ts
import { transpose } from '@devxbhuvn/array-fns';

transpose([
    [1, 2, 3],
    [4, 5, 6]
]); // [[1,4],[2,5],[3,6]]
```

### `zip`

Combines two arrays into a list of tuples.

```ts
function zip<A, B>(first: readonly A[], second: readonly B[]): Array<[A, B]>;
```

**Notes:** Stops at shortest length.

```ts
import { zip } from '@devxbhuvn/array-fns';

zip([1, 2], ['a', 'b', 'c']); // [[1,'a'],[2,'b']]
```

### `zipWith`

Combines two arrays with a mapper function.

```ts
function zipWith<A, B, R>(first: readonly A[], second: readonly B[], mapper: (left: A, right: B) => R): R[];
```

**Notes:** Zip + map in one step.

```ts
import { zipWith } from '@devxbhuvn/array-fns';

zipWith([1, 2], [10, 20], (a, b) => a + b); // [11, 21]
```

### `zipLongest`

Zips arrays to the longest length, padding missing values with `undefined`.

```ts
function zipLongest<A, B>(first: readonly A[], second: readonly B[]): Array<[A | undefined, B | undefined]>;
```

**Notes:** Pads missing side with `undefined`.

```ts
import { zipLongest } from '@devxbhuvn/array-fns';

zipLongest([1], ['a', 'b']); // [[1,'a'],[undefined,'b']]
```

### `zipMany`

Zips any number of arrays to the shortest length.

```ts
function zipMany(): [];
function zipMany<T1>(a: readonly T1[]): [T1][];
function zipMany<T1, T2>(a: readonly T1[], b: readonly T2[]): [T1, T2][];
function zipMany<T1, T2, T3>(a: readonly T1[], b: readonly T2[], c: readonly T3[]): [T1, T2, T3][];
function zipMany<T1, T2, T3, T4>(a: readonly T1[], b: readonly T2[], c: readonly T3[], d: readonly T4[]): [T1, T2, T3, T4][];
```

**Notes:** N-ary zip to shortest length; tuple overloads.

```ts
import { zipMany } from '@devxbhuvn/array-fns';

zipMany([1, 2], ['a', 'b'], [true, false]);
```

### `zipObject`

Creates an object from parallel key and value arrays.

```ts
function zipObject<K extends PropertyKey, V>(keys: readonly K[], values: readonly V[]): Record<K, V>;
```

**Notes:** Parallel keys/values → object.

```ts
import { zipObject } from '@devxbhuvn/array-fns';

zipObject(['a', 'b'], [1, 2]); // { a: 1, b: 2 }
```

### `unzip`

Converts an array of coordinate pairs into two arrays.

```ts
function unzip<T, U>(entries: readonly (readonly [T, U])[]): [T[], U[]];
```

**Notes:** Pairs → two arrays.

```ts
import { unzip } from '@devxbhuvn/array-fns';

unzip([
    [1, 'a'],
    [2, 'b']
]); // [[1,2],['a','b']]
```

### `unzipWith`

Combines each column of tuples with an iteratee.

```ts
function unzipWith<T, R>(array: ReadonlyArray<readonly T[]>, iteratee: (...values: T[]) => R): R[];
```

**Notes:** Combine columns with an iteratee.

```ts
import { unzipWith } from '@devxbhuvn/array-fns';

unzipWith(
    [
        [1, 2],
        [3, 4]
    ],
    (a, b) => a + b
); // [4, 6]
```

### `cartesian`

Returns the cartesian product of the provided arrays.

```ts
function cartesian(): [[]];
function cartesian<T1>(a: readonly T1[]): [T1][];
function cartesian<T1, T2>(a: readonly T1[], b: readonly T2[]): [T1, T2][];
function cartesian<T1, T2, T3>(a: readonly T1[], b: readonly T2[], c: readonly T3[]): [T1, T2, T3][];
function cartesian<T1, T2, T3, T4>(a: readonly T1[], b: readonly T2[], c: readonly T3[], d: readonly T4[]): [T1, T2, T3, T4][];
```

**Notes:** Empty call returns `[[]]` (one empty tuple).

```ts
import { cartesian } from '@devxbhuvn/array-fns';

cartesian([1, 2], ['a']); // [[1,'a'],[2,'a']]
```

## 🗂️ Arrays of objects

### `pluck`

Maps each item to the value at `key`.

```ts
function pluck<T extends object, K extends keyof T>(array: readonly T[], key: K): Array<T[K]>;
```

**Notes:** Pull one property from each object.

```ts
import { pluck } from '@devxbhuvn/array-fns';

pluck([{ name: 'Maya' }, { name: 'Noah' }], 'name'); // ['Maya','Noah']
```

### `keyBy`

Creates an object keyed by the selector result, keeping the last value for each key.

```ts
function keyBy<T, K extends PropertyKey>(array: readonly T[], selector: Selector<T, K>): Record<K, T>;
```

**Notes:** Last item wins. Null-prototype object.

```ts
import { keyBy } from '@devxbhuvn/array-fns';

keyBy([{ id: 'a' }, { id: 'b' }], (x) => x.id);
```

### `groupBy`

Groups items by a selector result.

```ts
function groupBy<T, K extends PropertyKey>(array: readonly T[], selector: Selector<T, K>): Record<K, T[]>;
```

**Notes:** Null-prototype `Record`. Safe for `__proto__` keys.

```ts
import { groupBy } from '@devxbhuvn/array-fns';

groupBy([{ t: 'a' }, { t: 'b' }], (x) => x.t);
```

### `countBy`

Counts values grouped by the result of a selector.

```ts
function countBy<T, K extends PropertyKey>(array: readonly T[], selector: Selector<T, K>): Record<K, number>;
```

**Notes:** Returns a null-prototype `Record` of counts.

```ts
import { countBy } from '@devxbhuvn/array-fns';

countBy(['a', 'a', 'b'], (v) => v); // { a: 2, b: 1 }
```

### `orderBy`

Stable multi-criteria sort with optional per-selector directions.

```ts
function orderBy<T>(array: readonly T[], selectors: readonly SortSelector<T>[], orders: readonly OrderDirection[] = []): T[];
```

**Notes:** Stable multi-key sort with `'asc' | 'desc'` per selector.

```ts
import { orderBy } from '@devxbhuvn/array-fns';

orderBy(users, [(u) => u.score], ['desc']);
```

### `sortBy`

Returns a stable sorted copy using one or more value selectors.

```ts
function sortBy<T>(array: readonly T[], ...selectors: SortSelector<T>[]): T[];
```

**Notes:** Stable. Multiple selectors = tie-breakers.

```ts
import { sortBy } from '@devxbhuvn/array-fns';

sortBy(
    tasks,
    (t) => t.priority,
    (t) => t.title
);
```

### `sortWith`

Returns a sorted copy using one or more explicit comparators.

```ts
function sortWith<T>(array: readonly T[], ...comparators: Comparator<T>[]): T[];
```

### `sortedIndex`

Returns the lowest index at which `value` should be inserted to maintain ascending order. Assumes `array` is already sorted ascending by SameValueZero-compatible `<` ordering for primitives.

```ts
function sortedIndex<T>(array: readonly T[], value: T): number;
```

**Notes:** Assumes ascending sorted array.

```ts
import { sortedIndex } from '@devxbhuvn/array-fns';

sortedIndex([1, 3, 5], 4); // 2
```

### `sortedUnique`

Removes consecutive duplicates from an ascending-sorted array (SameValueZero).

```ts
function sortedUnique<T>(array: readonly T[]): T[];
```

**Notes:** Only removes consecutive duplicates.

```ts
import { sortedUnique } from '@devxbhuvn/array-fns';

sortedUnique([1, 1, 2, 2, 3]); // [1,2,3]
```

**Notes:** Stable multi-comparator sort.

```ts
import { sortWith } from '@devxbhuvn/array-fns';

sortWith([3, 1, 2], (a, b) => a - b); // [1,2,3]
```

### `maxBy`

Returns the item with the largest numeric iteratee result.

```ts
function maxBy<T>(array: readonly T[], iteratee: Iteratee<T, number>): T | undefined;
```

**Notes:** Returns the item with the max iteratee value.

```ts
import { maxBy } from '@devxbhuvn/array-fns';

maxBy([{ n: 1 }, { n: 9 }], (x) => x.n); // {n:9}
```

### `minBy`

Returns the item with the smallest numeric iteratee result.

```ts
function minBy<T>(array: readonly T[], iteratee: Iteratee<T, number>): T | undefined;
```

**Notes:** Returns the item with the min iteratee value.

```ts
import { minBy } from '@devxbhuvn/array-fns';

minBy([{ n: 1 }, { n: 9 }], (x) => x.n); // {n:1}
```

### `sumBy`

Returns the sum of finite iteratee results.

```ts
function sumBy<T>(array: readonly T[], iteratee: Iteratee<T, number>): number;
```

**Notes:** Sums finite iteratee results.

```ts
import { sumBy } from '@devxbhuvn/array-fns';

sumBy([{ n: 2 }, { n: 3 }], (x) => x.n); // 5
```

### `meanBy`

Returns the mean of finite iteratee results, or undefined when none.

```ts
function meanBy<T>(array: readonly T[], iteratee: Iteratee<T, number>): number | undefined;
```

**Notes:** Mean of finite iteratee results.

```ts
import { meanBy } from '@devxbhuvn/array-fns';

meanBy([{ n: 2 }, { n: 4 }], (x) => x.n); // 3
```

## 🗺️ Map helpers

### `groupToMap`

Groups items into a `Map` keyed by the selector result.

```ts
function groupToMap<T, K>(array: readonly T[], selector: Iteratee<T, K>): Map<K, T[]>;
```

**Notes:** Map twin of `groupBy` (any key type).

```ts
import { groupToMap } from '@devxbhuvn/array-fns';

groupToMap([{ t: 'a' }, { t: 'a' }], (x) => x.t).get('a');
```

### `indexToMap`

Creates a `Map` keyed by the selector result, keeping the last value for each key.

```ts
function indexToMap<T, K>(array: readonly T[], selector: Iteratee<T, K>): Map<K, T>;
```

**Notes:** Last item wins per key.

```ts
import { indexToMap } from '@devxbhuvn/array-fns';

indexToMap([{ id: 1 }, { id: 1, name: 'b' }], (x) => x.id).get(1);
```

### `frequencies`

Counts occurrences of each key (or value when no selector is given). Uses `Map` SameValueZero semantics.

```ts
function frequencies<T>(array: readonly T[]): Map<T, number>;
function frequencies<T, K>(array: readonly T[], selector: Iteratee<T, K>): Map<K, number>;
function frequencies<T, K>(array: readonly T[], selector?: Iteratee<T, K>): Map<T | K, number>;
```

**Notes:** Returns a `Map` (SameValueZero keys).

```ts
import { frequencies } from '@devxbhuvn/array-fns';

frequencies([1, 1, 2]); // Map { 1 => 2, 2 => 1 }
```

## 🔗 Set operations

### `unique`

Removes duplicates from an array using SameValueZero semantics.

```ts
function unique<T>(array: readonly T[]): T[];
function unique<T, K extends PropertyKey>(array: readonly T[], selector: (value: T, index: number, array: readonly T[]) => K): T[];
function unique<T, K extends PropertyKey>(array: readonly T[], selector?: (value: T, index: number, array: readonly T[]) => K): T[];
```

**Notes:** Optional selector for object keys.

```ts
import { unique } from '@devxbhuvn/array-fns';

unique([1, 1, 2]); // [1,2]
unique(users, (u) => u.id);
```

### `uniqueWith`

Removes duplicates using a custom equality comparator.

```ts
function uniqueWith<T>(array: readonly T[], comparator: EqualityComparator<T>): T[];
```

**Notes:** Custom equality; first occurrence kept.

```ts
import { uniqueWith } from '@devxbhuvn/array-fns';

uniqueWith([{ id: 1 }, { id: 1 }], (a, b) => a.id === b.id);
```

### `union`

Returns unique values from multiple arrays in order of appearance.

```ts
function union<T>(...arrays: ReadonlyArray<readonly T[]>): T[];
```

**Notes:** Unique values, first-seen order.

```ts
import { union } from '@devxbhuvn/array-fns';

union([1, 2], [2, 3]); // [1, 2, 3]
```

### `unionBy`

Merges arrays keeping the first item for each selector key.

```ts
function unionBy<T, K extends PropertyKey>(selector: Selector<T, K>, ...arrays: ReadonlyArray<readonly T[]>): T[];
```

**Notes:** Selector first, then arrays.

```ts
import { unionBy } from '@devxbhuvn/array-fns';

unionBy((x) => x.id, [{ id: 1 }], [{ id: 1 }, { id: 2 }]);
```

### `unionWith`

Merges arrays using a custom equality comparator.

```ts
function unionWith<T>(comparator: EqualityComparator<T>, ...arrays: ReadonlyArray<readonly T[]>): T[];
```

**Notes:** Comparator first, then arrays.

```ts
import { unionWith } from '@devxbhuvn/array-fns';

unionWith((a, b) => a.id === b.id, [{ id: 1 }], [{ id: 1 }]);
```

### `difference`

Returns the values in the first array that are not in the other arrays. Equality is based on JavaScript SameValueZero semantics.

```ts
function difference<T>(array: readonly T[], other: readonly T[]): T[];
```

**Notes:** SameValueZero. Order follows the first array.

```ts
import { difference } from '@devxbhuvn/array-fns';

difference([1, 2, 3], [2, 4]); // [1, 3]
```

### `differenceAll`

Returns values from the first array that are not present in any of the other arrays (SameValueZero).

```ts
function differenceAll<T>(array: readonly T[], ...others: readonly (readonly T[])[]): T[];
```

**Notes:** Excludes values present in any other array.

```ts
import { differenceAll } from '@devxbhuvn/array-fns';

differenceAll([1, 2, 3, 4], [2], [4]); // [1, 3]
```

### `differenceBy`

Returns values from `array` whose selector keys are not in `other`.

```ts
function differenceBy<T, K extends PropertyKey>(array: readonly T[], other: readonly T[], selector: Selector<T, K>): T[];
```

**Notes:** Compares selector keys with SameValueZero.

```ts
import { differenceBy } from '@devxbhuvn/array-fns';

differenceBy([{ id: 1 }, { id: 2 }], [{ id: 2 }], (x) => x.id); // [{id:1}]
```

### `differenceWith`

Returns values from `array` not matching any value in `other` under `comparator`.

```ts
function differenceWith<T>(array: readonly T[], other: readonly T[], comparator: EqualityComparator<T>): T[];
```

**Notes:** `comparator(a,b) === true` means equal.

```ts
import { differenceWith } from '@devxbhuvn/array-fns';

differenceWith([{ id: 1 }], [{ id: 1 }], (a, b) => a.id === b.id); // []
```

### `intersection`

Returns values that are present in both arrays. Equality is based on JavaScript SameValueZero semantics.

```ts
function intersection<T>(first: readonly T[], second: readonly T[]): T[];
```

**Notes:** Order follows the first array.

```ts
import { intersection } from '@devxbhuvn/array-fns';

intersection([1, 2, 3], [2, 3, 4]); // [2, 3]
```

### `intersectionAll`

Returns values present in every input array (SameValueZero), preserving order from the first array.

```ts
function intersectionAll<T>(...arrays: readonly (readonly T[])[]): T[];
```

**Notes:** Intersection across N arrays.

```ts
import { intersectionAll } from '@devxbhuvn/array-fns';

intersectionAll([1, 2, 3], [2, 3], [2, 9]); // [2]
```

### `intersectionBy`

Returns unique values from `first` whose selector keys appear in `second`.

```ts
function intersectionBy<T, K extends PropertyKey>(first: readonly T[], second: readonly T[], selector: Selector<T, K>): T[];
```

**Notes:** Keeps items from the first array.

```ts
import { intersectionBy } from '@devxbhuvn/array-fns';

intersectionBy([{ id: 1 }, { id: 2 }], [{ id: 2 }], (x) => x.id);
```

### `intersectionWith`

Returns unique values from `first` that match something in `second` under `comparator`.

```ts
function intersectionWith<T>(first: readonly T[], second: readonly T[], comparator: EqualityComparator<T>): T[];
```

**Notes:** Custom equality comparator.

```ts
import { intersectionWith } from '@devxbhuvn/array-fns';

intersectionWith([{ id: 1 }], [{ id: 1 }], (a, b) => a.id === b.id);
```

### `xor`

Returns values in either array but not both (SameValueZero), preserving order.

```ts
function xor<T>(first: readonly T[], second: readonly T[]): T[];
```

**Notes:** Symmetric difference.

```ts
import { xor } from '@devxbhuvn/array-fns';

xor([1, 2, 3], [2, 4]); // [1,3,4]
```

### `xorBy`

Symmetric difference by selector key, preserving first-seen items.

```ts
function xorBy<T, K extends PropertyKey>(first: readonly T[], second: readonly T[], selector: Selector<T, K>): T[];
```

**Notes:** Symmetric difference by selector key.

```ts
import { xorBy } from '@devxbhuvn/array-fns';

xorBy([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }], (x) => x.id);
```

### `without`

Returns a copy of `array` without the provided values (SameValueZero).

```ts
function without<T>(array: readonly T[], ...values: readonly T[]): T[];
```

**Notes:** Removes all listed values (SameValueZero).

```ts
import { without } from '@devxbhuvn/array-fns';

without([1, 2, 3, 1], 1, 3); // [2]
```

## 🧮 Aggregates & stats

### `sum`

Returns the sum of finite numbers. Empty arrays return 0.

```ts
function sum(array: readonly number[]): number;
```

**Notes:** Non-finite values ignored. Empty → `0`.

```ts
import { sum } from '@devxbhuvn/array-fns';

sum([1, 2, 3]); // 6
```

### `product`

Returns the product of finite numbers. Empty arrays return 1.

```ts
function product(array: readonly number[]): number;
```

**Notes:** Product of finite numbers. Empty → `1`.

```ts
import { product } from '@devxbhuvn/array-fns';

product([2, 3, 4]); // 24
```

### `mean`

Returns the arithmetic mean of finite numbers, or undefined when none.

```ts
function mean(array: readonly number[]): number | undefined;
```

**Notes:** Arithmetic mean of finite numbers. Empty → `undefined`.

```ts
import { mean } from '@devxbhuvn/array-fns';

mean([2, 4, 6]); // 4
```

### `median`

Returns the median of finite numbers, or undefined when none.

```ts
function median(array: readonly number[]): number | undefined;
```

**Notes:** Linear middle of sorted finite values.

```ts
import { median } from '@devxbhuvn/array-fns';

median([1, 2, 3, 4]); // 2.5
```

### `mode`

Returns the most frequent value (first on ties), or undefined when empty.

```ts
function mode<T>(array: readonly T[]): T | undefined;
```

**Notes:** Most frequent value (first on ties). Empty → `undefined`.

```ts
import { mode } from '@devxbhuvn/array-fns';

mode([1, 2, 2, 3]); // 2
```

### `percentile`

Returns the percentile of finite numbers using linear interpolation.

```ts
function percentile(array: readonly number[], percentileValue: number): number | undefined;
```

**Notes:** `p` in `[0, 100]`; linear interpolation.

```ts
import { percentile } from '@devxbhuvn/array-fns';

percentile([0, 10, 20, 30], 50); // 15
```

### `extent`

Returns `[min, max]` over finite numbers, or `undefined` when none.

```ts
function extent(array: readonly number[]): [number, number] | undefined;
```

**Notes:** Ignores non-finite numbers. Empty → `undefined`.

```ts
import { extent } from '@devxbhuvn/array-fns';

extent([3, 1, 4]); // [1, 4]
```

### `variance`

Population variance of finite numbers, or `undefined` when none.

```ts
function variance(array: readonly number[]): number | undefined;
```

**Notes:** Population variance. Empty → `undefined`.

```ts
import { variance } from '@devxbhuvn/array-fns';

variance([2, 4, 4, 4, 5, 5, 7, 9]); // 4
```

### `stdDev`

Population standard deviation of finite numbers, or `undefined` when none.

```ts
function stdDev(array: readonly number[]): number | undefined;
```

**Notes:** Population stddev (`sqrt(variance)`). Empty → `undefined`.

```ts
import { stdDev } from '@devxbhuvn/array-fns';

stdDev([2, 4, 4, 4, 5, 5, 7, 9]); // 2
```

### `max`

Returns the maximum finite number, or undefined when empty / no finite values.

```ts
function max(array: readonly number[]): number | undefined;
```

**Notes:** Finite numbers only. Empty → `undefined`.

```ts
import { max } from '@devxbhuvn/array-fns';

max([1, 5, 3]); // 5
```

### `min`

Returns the minimum finite number, or undefined when empty / no finite values.

```ts
function min(array: readonly number[]): number | undefined;
```

**Notes:** Finite numbers only. Empty → `undefined`.

```ts
import { min } from '@devxbhuvn/array-fns';

min([1, 5, 3]); // 1
```

## ✏️ Immutable edits

### `insertAt`

Returns a copy with `values` inserted at `index`.

```ts
function insertAt<T>(array: readonly T[], index: number, ...values: readonly T[]): T[];
```

**Notes:** Negative indexes supported via clamp.

```ts
import { insertAt } from '@devxbhuvn/array-fns';

insertAt([1, 3], 1, 2); // [1, 2, 3]
```

### `removeAt`

Returns a copy with the element at `index` removed. Negative indexes are supported.

```ts
function removeAt<T>(array: readonly T[], index: number): T[];
```

**Notes:** Negative indexes supported. Out of range → copy.

```ts
import { removeAt } from '@devxbhuvn/array-fns';

removeAt([1, 2, 3], 1); // [1, 3]
```

### `updateAt`

Returns a copy with the element at `index` replaced by `updater(value)`.

```ts
function updateAt<T>(array: readonly T[], index: number, updater: (value: T) => T): T[];
```

**Notes:** Updater receives current value.

```ts
import { updateAt } from '@devxbhuvn/array-fns';

updateAt([1, 2, 3], 1, (v) => v * 10); // [1,20,3]
```

### `setAt`

Returns a copy with the element at `index` replaced by `value`.

```ts
function setAt<T>(array: readonly T[], index: number, value: T): T[];
```

**Notes:** Out-of-range index → unchanged copy.

```ts
import { setAt } from '@devxbhuvn/array-fns';

setAt([1, 2, 3], 1, 9); // [1,9,3]
```

### `move`

Moves the item at `from` to `to` (immutable).

```ts
function move<T>(array: readonly T[], from: number, to: number): T[];
```

**Notes:** Moves item from `from` to `to` (immutable).

```ts
import { move } from '@devxbhuvn/array-fns';

move([1, 2, 3, 4], 1, 3); // [1, 3, 4, 2]
```

### `swap`

Swaps values at two indexes (immutable).

```ts
function swap<T>(array: readonly T[], firstIndex: number, secondIndex: number): T[];
```

**Notes:** Out-of-range → unchanged copy.

```ts
import { swap } from '@devxbhuvn/array-fns';

swap([1, 2, 3], 0, 2); // [3,2,1]
```

### `fill`

Returns a copy with `value` filled from `start` (inclusive) to `end` (exclusive).

```ts
function fill<T>(array: readonly T[], value: T, start = 0, end = array.length): T[];
```

**Notes:** Immutable fill in `[start, end)`.

```ts
import { fill } from '@devxbhuvn/array-fns';

fill([1, 2, 3, 4], 0, 1, 3); // [1, 0, 0, 4]
```

### `splice`

Immutable splice: returns a copy with `deleteCount` items removed at `start` and `items` inserted.

```ts
function splice<T>(array: readonly T[], start: number, deleteCount: number, ...items: readonly T[]): T[];
```

**Notes:** Immutable splice (copy + edit).

```ts
import { splice } from '@devxbhuvn/array-fns';

splice([1, 2, 3, 4], 1, 2, 9); // [1,9,4]
```

### `replace`

Returns a copy with the first matching item replaced by `replacement` (value or updater). If nothing matches, returns a shallow copy.

```ts
function replace<T>(array: readonly T[], predicate: Predicate<T>, replacement: T | ((value: T, index: number, array: readonly T[]) => T)): T[];
```

**Notes:** Replaces first match; value or updater function.

```ts
import { replace } from '@devxbhuvn/array-fns';

replace([1, 2, 3, 2], (v) => v === 2, 9); // [1,9,3,2]
```

### `clampIndex`

Clamps an index into `[0, length]` for insert-style operations. Negative indexes count from the end.

```ts
function clampIndex(index: number, length: number): number;
```

**Notes:** Negative indexes count from the end. `length` must be ≥ 0.

```ts
import { clampIndex } from '@devxbhuvn/array-fns';

clampIndex(-1, 5); // 4
```

## 🎲 Random

### `sample`

Returns a random element from an array.

```ts
function sample<T>(array: readonly T[], random: RandomSource = Math.random): T | undefined;
```

**Notes:** Optional `random?: () => number`. Empty → `undefined`.

```ts
import { sample } from '@devxbhuvn/array-fns';

sample([10, 20, 30], () => 0); // 10
```

### `sampleSize`

Returns a random sample of size `n` from the array.

```ts
function sampleSize<T>(array: readonly T[], size: number, random: RandomSource = Math.random): T[];
```

**Notes:** Partial Fisher–Yates. `size` ≥ 0 integer.

```ts
import { sampleSize } from '@devxbhuvn/array-fns';

sampleSize([1, 2, 3, 4], 2);
```

### `sampleWeighted`

Returns a random item using non-negative weights aligned with `array`.

```ts
function sampleWeighted<T>(array: readonly T[], weights: readonly number[], random: RandomSource = Math.random): T | undefined;
```

**Notes:** Weights must match length; total > 0.

```ts
import { sampleWeighted } from '@devxbhuvn/array-fns';

sampleWeighted(['a', 'b'], [1, 3]);
```

### `shuffle`

Returns a shuffled copy of the array using the Fisher-Yates algorithm.

```ts
function shuffle<T>(array: readonly T[], random: RandomSource = Math.random): T[];
```

**Notes:** Fisher–Yates. Optional RNG.

```ts
import { shuffle } from '@devxbhuvn/array-fns';

shuffle([1, 2, 3], () => 0);
```

## 🛠️ Create

### `range`

Creates a numeric range.

```ts
function range(startOrEnd: number, end?: number, step?: number): number[];
```

**Notes:** `range(5)` → `[0..4]`. Step defaults by direction.

```ts
import { range } from '@devxbhuvn/array-fns';

range(1, 5); // [1, 2, 3, 4]
range(5, 0, -2); // [5, 3, 1]
```

### `rangeRight`

Creates a numeric range and returns it in reverse order. Argument rules match `range`.

```ts
function rangeRight(startOrEnd: number, end?: number, step?: number): number[];
```

**Notes:** Same args as `range`, reversed result.

```ts
import { rangeRight } from '@devxbhuvn/array-fns';

rangeRight(5); // [4, 3, 2, 1, 0]
```

### `times`

Creates an array of length `count` by invoking `iteratee` with each index.

```ts
function times<T>(count: number, iteratee: (index: number) => T): T[];
```

**Notes:** `count` must be a non-negative integer.

```ts
import { times } from '@devxbhuvn/array-fns';

times(3, (i) => i * 2); // [0, 2, 4]
```

### `repeat`

Creates an array filled with `value` repeated `count` times.

```ts
function repeat<T>(value: T, count: number): T[];
```

**Notes:** `count` must be a non-negative integer.

```ts
import { repeat } from '@devxbhuvn/array-fns';

repeat('x', 3); // ['x','x','x']
```

### `castArray`

Wraps a non-array value in an array; returns array values unchanged (shallow copy).

```ts
function castArray<T>(value: T | readonly T[]): T[];
```

**Notes:** Non-arrays are wrapped; arrays are shallow-copied.

```ts
import { castArray } from '@devxbhuvn/array-fns';

castArray(1); // [1]
castArray([1, 2]); // [1, 2]
```

## 🔤 A–Z API index

| Function                                | Section             |
| --------------------------------------- | ------------------- |
| [`at`](#at)                             | Search & test       |
| [`binarySearch`](#binarysearch)         | Search & test       |
| [`cartesian`](#cartesian)               | Structure & windows |
| [`castArray`](#castarray)               | Create              |
| [`chunk`](#chunk)                       | Structure & windows |
| [`chunkBy`](#chunkby)                   | Structure & windows |
| [`clampIndex`](#clampindex)             | Immutable edits     |
| [`compact`](#compact)                   | Transform & reduce  |
| [`compactBy`](#compactby)               | Transform & reduce  |
| [`compactMap`](#compactmap)             | Transform & reduce  |
| [`count`](#count)                       | Search & test       |
| [`countBy`](#countby)                   | Arrays of objects   |
| [`countWhere`](#countwhere)             | Search & test       |
| [`difference`](#difference)             | Set operations      |
| [`differenceAll`](#differenceall)       | Set operations      |
| [`differenceBy`](#differenceby)         | Set operations      |
| [`differenceWith`](#differencewith)     | Set operations      |
| [`drop`](#drop)                         | Slice & split       |
| [`dropLastWhile`](#droplastwhile)       | Slice & split       |
| [`dropRight`](#dropright)               | Slice & split       |
| [`dropUntil`](#dropuntil)               | Slice & split       |
| [`dropWhile`](#dropwhile)               | Slice & split       |
| [`endsWith`](#endswith)                 | Search & test       |
| [`equals`](#equals)                     | Search & test       |
| [`every`](#every)                       | Search & test       |
| [`extent`](#extent)                     | Aggregates & stats  |
| [`fill`](#fill)                         | Immutable edits     |
| [`filter`](#filter)                     | Search & test       |
| [`find`](#find)                         | Search & test       |
| [`findIndex`](#findindex)               | Search & test       |
| [`findLast`](#findlast)                 | Search & test       |
| [`findLastIndex`](#findlastindex)       | Search & test       |
| [`findMap`](#findmap)                   | Search & test       |
| [`first`](#first)                       | Search & test       |
| [`flatMap`](#flatmap)                   | Transform & reduce  |
| [`flatMapDeep`](#flatmapdeep)           | Transform & reduce  |
| [`flatten`](#flatten)                   | Transform & reduce  |
| [`flattenDeep`](#flattendeep)           | Transform & reduce  |
| [`frequencies`](#frequencies)           | Map helpers         |
| [`groupBy`](#groupby)                   | Arrays of objects   |
| [`groupToMap`](#grouptomap)             | Map helpers         |
| [`includes`](#includes)                 | Search & test       |
| [`includesAll`](#includesall)           | Search & test       |
| [`includesAny`](#includesany)           | Search & test       |
| [`indexOf`](#indexof)                   | Search & test       |
| [`indexToMap`](#indextomap)             | Map helpers         |
| [`initial`](#initial)                   | Slice & split       |
| [`insertAt`](#insertat)                 | Immutable edits     |
| [`interleave`](#interleave)             | Structure & windows |
| [`intersection`](#intersection)         | Set operations      |
| [`intersectionAll`](#intersectionall)   | Set operations      |
| [`intersectionBy`](#intersectionby)     | Set operations      |
| [`intersectionWith`](#intersectionwith) | Set operations      |
| [`intersperse`](#intersperse)           | Structure & windows |
| [`isEmpty`](#isempty)                   | Search & test       |
| [`isSorted`](#issorted)                 | Search & test       |
| [`isSubset`](#issubset)                 | Search & test       |
| [`isSuperset`](#issuperset)             | Search & test       |
| [`keyBy`](#keyby)                       | Arrays of objects   |
| [`last`](#last)                         | Search & test       |
| [`lastIndexOf`](#lastindexof)           | Search & test       |
| [`map`](#map)                           | Transform & reduce  |
| [`max`](#max)                           | Aggregates & stats  |
| [`maxBy`](#maxby)                       | Arrays of objects   |
| [`mean`](#mean)                         | Aggregates & stats  |
| [`meanBy`](#meanby)                     | Arrays of objects   |
| [`median`](#median)                     | Aggregates & stats  |
| [`min`](#min)                           | Aggregates & stats  |
| [`minBy`](#minby)                       | Arrays of objects   |
| [`mode`](#mode)                         | Aggregates & stats  |
| [`move`](#move)                         | Immutable edits     |
| [`none`](#none)                         | Search & test       |
| [`orderBy`](#orderby)                   | Arrays of objects   |
| [`partition`](#partition)               | Slice & split       |
| [`partitionBy`](#partitionby)           | Structure & windows |
| [`percentile`](#percentile)             | Aggregates & stats  |
| [`pluck`](#pluck)                       | Arrays of objects   |
| [`product`](#product)                   | Aggregates & stats  |
| [`range`](#range)                       | Create              |
| [`rangeRight`](#rangeright)             | Create              |
| [`reduce`](#reduce)                     | Transform & reduce  |
| [`reduceRight`](#reduceright)           | Transform & reduce  |
| [`reduceWhile`](#reducewhile)           | Transform & reduce  |
| [`reject`](#reject)                     | Transform & reduce  |
| [`removeAt`](#removeat)                 | Immutable edits     |
| [`repeat`](#repeat)                     | Create              |
| [`replace`](#replace)                   | Immutable edits     |
| [`reverse`](#reverse)                   | Transform & reduce  |
| [`rotate`](#rotate)                     | Transform & reduce  |
| [`sample`](#sample)                     | Random              |
| [`sampleSize`](#samplesize)             | Random              |
| [`sampleWeighted`](#sampleweighted)     | Random              |
| [`scan`](#scan)                         | Transform & reduce  |
| [`setAt`](#setat)                       | Immutable edits     |
| [`shuffle`](#shuffle)                   | Random              |
| [`sliding`](#sliding)                   | Structure & windows |
| [`some`](#some)                         | Search & test       |
| [`sortBy`](#sortby)                     | Arrays of objects   |
| [`sortWith`](#sortwith)                 | Arrays of objects   |
| [`sortedIndex`](#sortedindex)           | Other               |
| [`sortedUnique`](#sortedunique)         | Other               |
| [`span`](#span)                         | Slice & split       |
| [`splice`](#splice)                     | Immutable edits     |
| [`splitAt`](#splitat)                   | Slice & split       |
| [`splitWhen`](#splitwhen)               | Slice & split       |
| [`startsWith`](#startswith)             | Search & test       |
| [`stdDev`](#stddev)                     | Aggregates & stats  |
| [`sum`](#sum)                           | Aggregates & stats  |
| [`sumBy`](#sumby)                       | Arrays of objects   |
| [`swap`](#swap)                         | Immutable edits     |
| [`tail`](#tail)                         | Slice & split       |
| [`take`](#take)                         | Slice & split       |
| [`takeLastWhile`](#takelastwhile)       | Slice & split       |
| [`takeRight`](#takeright)               | Slice & split       |
| [`takeUntil`](#takeuntil)               | Slice & split       |
| [`takeWhile`](#takewhile)               | Slice & split       |
| [`tap`](#tap)                           | Transform & reduce  |
| [`times`](#times)                       | Create              |
| [`transpose`](#transpose)               | Structure & windows |
| [`union`](#union)                       | Set operations      |
| [`unionBy`](#unionby)                   | Set operations      |
| [`unionWith`](#unionwith)               | Set operations      |
| [`unique`](#unique)                     | Set operations      |
| [`uniqueWith`](#uniquewith)             | Set operations      |
| [`unzip`](#unzip)                       | Structure & windows |
| [`unzipWith`](#unzipwith)               | Structure & windows |
| [`updateAt`](#updateat)                 | Immutable edits     |
| [`variance`](#variance)                 | Aggregates & stats  |
| [`without`](#without)                   | Set operations      |
| [`xor`](#xor)                           | Set operations      |
| [`xorBy`](#xorby)                       | Set operations      |
| [`zip`](#zip)                           | Structure & windows |
| [`zipLongest`](#ziplongest)             | Structure & windows |
| [`zipMany`](#zipmany)                   | Structure & windows |
| [`zipObject`](#zipobject)               | Structure & windows |
| [`zipWith`](#zipwith)                   | Structure & windows |

---

## ⚠️ Edge cases & errors

- `chunk`, `sliding`, and related size/step args require **positive integers**
- `flatten` depth must be a non-negative integer or `Infinity`
- `range` / `rangeRight` reject invalid bounds; step must be non-zero finite
- `sampleSize`, `repeat`, `times` require non-negative integer counts
- `percentile` requires a finite value in `[0, 100]`
- `sampleWeighted` requires matching lengths, non-negative finite weights, total > 0
- `take` / `drop` require non-negative integer counts
- `reduce` / `reduceRight` throw on an empty array without an initial value
- Empty-safe returns `undefined`: `first`, `last`, `find*`, `sample`, `max`/`min`, `mean`, `median`, `mode`, `extent`, `variance`, `stdDev`, …
- `sum` → `0`, `product` → `1` for empty arrays
- `zip` / `zipWith` / `zipMany` stop at the **shortest** input; `zipLongest` pads with `undefined`
- `binarySearch` assumes ascending sorted input
- Equality helpers do **not** deep-compare objects

---

## 🔁 Migrating from 1.x

| Removed in 2.0 | Use instead                  |
| -------------- | ---------------------------- |
| `nth`          | `at`                         |
| `indexBy`      | `keyBy`                      |
| `rest`         | `tail`                       |
| `choice`       | `sample`                     |
| `uniqueBy`     | `unique` (optional selector) |

Also: Node engine is now **`>=20`**.

---

## 📘 TypeScript types

```ts
import type { Comparator, EqualityComparator, Iteratee, OrderDirection, Predicate, RandomSource, Selector, SortValue, TypeGuardPredicate } from '@devxbhuvn/array-fns';
```

| Type                       | Meaning                                                              |
| -------------------------- | -------------------------------------------------------------------- |
| `Predicate<T>`             | `(value, index, array) => boolean`                                   |
| `TypeGuardPredicate<T, S>` | Narrowing predicate for `filter` / `find` / `findLast` / `takeWhile` |
| `Selector<T, K>`           | `(value, index, array) => PropertyKey`                               |
| `Iteratee<T, R>`           | Map a value to another result                                        |
| `Comparator<T>`            | `(a, b) => number` for sorting                                       |
| `EqualityComparator<T>`    | `(a, b) => boolean` (`true` = equal)                                 |
| `OrderDirection`           | `'asc' \| 'desc'`                                                    |
| `SortValue`                | Values supported by `sortBy` / `orderBy` selectors                   |
| `RandomSource`             | `() => number` in `[0, 1)`                                           |

---

## 📤 Package output

- ESM + CommonJS builds
- TypeScript declaration files
- Per-function deep entry points (`@devxbhuvn/array-fns/<name>`)
- `CHANGELOG.md` included in the published package
- Marked `sideEffects: false` for tree-shaking

---

## 📄 License

MIT
