# @devxbhuvn/array-fns

A TypeScript-first collection of small, immutable, dependency-free array utilities for JavaScript and TypeScript applications.

`@devxbhuvn/array-fns` provides focused helpers for transforming, searching, grouping, sorting, sampling, and combining arrays. Every function accepts readonly arrays, returns a new result, and leaves the input unchanged.

## Why use this package?

- **Immutable by default:** Input arrays are never modified.
- **TypeScript-first:** Generic types preserve useful type inference.
- **Small and composable:** Import only the functions you need.
- **Dependency-free:** No runtime dependencies are required.
- **Modern packaging:** ESM, CommonJS, and TypeScript declaration files are included.
- **Predictable equality:** Equality-based utilities use JavaScript SameValueZero semantics.

## Requirements

- Node.js 18 or newer
- Modern browsers with ES2020 support
- TypeScript projects are supported through published declaration files

## Installation

```bash
npm install @devxbhuvn/array-fns
```

## Getting started

```ts
import { groupBy, sortBy, unique } from '@devxbhuvn/array-fns';

type User = {
    id: number;
    name: string;
    team: string;
};

const users: User[] = [
    { id: 1, name: 'Maya', team: 'platform' },
    { id: 2, name: 'Noah', team: 'design' },
    { id: 3, name: 'Ava', team: 'platform' }
];

const usersByTeam = groupBy(users, (user) => user.team);
const usersByName = sortBy(users, (user) => user.name);
const ids = unique([1, 1, 2, 3, 3]);

console.log(usersByTeam.platform); // Two users
console.log(usersByName[0]?.name); // Ava
console.log(ids); // [1, 2, 3]
```

### CommonJS

```js
const { chunk, range } = require('@devxbhuvn/array-fns');

console.log(chunk(range(1, 7), 2));
// [[1, 2], [3, 4], [5, 6]]
```

## General behavior

### Immutability

All array functions return new arrays or values. They do not mutate their input arrays.

```ts
import { reverse, sortBy } from '@devxbhuvn/array-fns';

const numbers = [3, 1, 2];
const sorted = sortBy(numbers, (value) => value);
const reversed = reverse(numbers);

console.log(numbers); // [3, 1, 2]
console.log(sorted); // [1, 2, 3]
console.log(reversed); // [2, 1, 3]
```

Objects inside an array are not cloned. The array structure is copied, but the object references remain the same.

### Callback arguments

Predicates, selectors, and mapping callbacks receive the value, its index, and the original readonly array:

```ts
import { map } from '@devxbhuvn/array-fns';

const values = [10, 20, 30];
const result = map(values, (value, index, array) => {
    console.log(value, index, array);
    return value + index;
});

// result: [10, 21, 32]
```

### Equality

`unique`, `union`, `difference`, `intersection`, and `includes` use SameValueZero equality. This means that `NaN` equals `NaN`, and `0` equals `-0`.

Object values are compared by reference, not by their contents:

```ts
import { includes, unique } from '@devxbhuvn/array-fns';

console.log(includes([1, NaN], NaN)); // true
console.log(unique([NaN, NaN, 1])); // [NaN, 1]
console.log(unique([{ id: 1 }, { id: 1 }])); // Keeps both objects
```

Use `unique` with a selector when objects should be compared by a property:

```ts
const products = [
    { id: 'a', name: 'Keyboard' },
    { id: 'b', name: 'Mouse' },
    { id: 'a', name: 'Keyboard - duplicate record' }
];

const distinctProducts = unique(products, (product) => product.id);
// Keeps the first product for each id
```

# API reference

## Selection and search

### `filter`

Returns a new array containing values for which the predicate returns `true`.

```ts
import { filter } from '@devxbhuvn/array-fns';

const activeUsers = filter(
    [
        { name: 'Maya', active: true },
        { name: 'Noah', active: false },
        { name: 'Ava', active: true }
    ],
    (user) => user.active
);

// [{ name: 'Maya', active: true }, { name: 'Ava', active: true }]
```

### `find`

Returns the first value that matches a predicate. Returns `undefined` when there is no match.

```ts
import { find } from '@devxbhuvn/array-fns';

const account = find(accounts, (item) => item.email === 'maya@example.com');
```

### `findIndex`

Returns the index of the first matching value, or `-1` when no value matches. An optional `fromIndex` controls where the search begins; negative values count from the end.

```ts
import { findIndex } from '@devxbhuvn/array-fns';

const values = ['draft', 'published', 'draft'];

findIndex(values, (value) => value === 'draft'); // 0
findIndex(values, (value) => value === 'draft', 1); // 2
findIndex(values, (value) => value === 'draft', -1); // 2
```

### `some`

Returns `true` when at least one value matches the predicate. It stops as soon as a match is found.

```ts
import { some } from '@devxbhuvn/array-fns';

const hasErrors = some(results, (result) => result.status === 'error');
```

### `every`

Returns `true` when every value matches the predicate. It stops as soon as a value does not match. For an empty array, it returns `true`.

```ts
import { every } from '@devxbhuvn/array-fns';

const isValid = every(formFields, (field) => field.value.trim().length > 0);
```

### `includes`

Checks whether an array contains a value using SameValueZero equality. An optional `fromIndex` controls the starting position.

```ts
import { includes } from '@devxbhuvn/array-fns';

includes(['queued', 'running', 'complete'], 'running'); // true
includes([1, 2, 3, 2], 2, 2); // true
includes([1, NaN], NaN); // true
```

### `indexOf`

Returns the first index of a value using strict equality, or `-1` when the value is absent. It supports an optional starting index.

```ts
import { indexOf } from '@devxbhuvn/array-fns';

indexOf(['a', 'b', 'a'], 'a'); // 0
indexOf(['a', 'b', 'a'], 'a', 1); // 2
indexOf([NaN], NaN); // -1, because strict equality does not match NaN
```

### `lastIndexOf`

Returns the last index of a value using strict equality, or `-1` when the value is absent. A negative `fromIndex` searches from an offset from the end.

```ts
import { lastIndexOf } from '@devxbhuvn/array-fns';

lastIndexOf(['a', 'b', 'a', 'c'], 'a'); // 2
lastIndexOf(['a', 'b', 'a', 'c'], 'a', -2); // 2
```

### `first`

Returns the first value in an array, or `undefined` for an empty array.

```ts
import { first } from '@devxbhuvn/array-fns';

first(['home', 'settings']); // 'home'
first([]); // undefined
```

### `last`

Returns the last value in an array, or `undefined` for an empty array.

```ts
import { last } from '@devxbhuvn/array-fns';

last(['page-1', 'page-2']); // 'page-2'
last([]); // undefined
```

### `count`

Counts values that match a predicate. When no predicate is supplied, it returns the array length.

```ts
import { count } from '@devxbhuvn/array-fns';

count([2, 4, 7, 8], (value) => value % 2 === 0); // 3
count(['a', 'b', 'c']); // 3
```

### `partition`

Splits an array into two new arrays: matching values first and non-matching values second.

```ts
import { partition } from '@devxbhuvn/array-fns';

const [paid, unpaid] = partition(invoices, (invoice) => invoice.status === 'paid');
```

## Transformation and reduction

### `map`

Transforms every value and returns the mapped results.

```ts
import { map } from '@devxbhuvn/array-fns';

const labels = map(
    [
        { id: 1, name: 'Keyboard' },
        { id: 2, name: 'Mouse' }
    ],
    (product) => `${product.id}: ${product.name}`
);

// ['1: Keyboard', '2: Mouse']
```

### `flatMap`

Transforms every value and flattens exactly one level of arrays returned by the mapper.

```ts
import { flatMap } from '@devxbhuvn/array-fns';

const tags = flatMap(
    [
        { name: 'Article A', tags: ['typescript', 'arrays'] },
        { name: 'Article B', tags: ['testing'] }
    ],
    (article) => article.tags
);

// ['typescript', 'arrays', 'testing']
```

### `reduce`

Combines values from left to right into a single result. Provide an initial value when the accumulator type differs from the array element type. Reducing an empty array without an initial value throws a `TypeError`.

```ts
import { reduce } from '@devxbhuvn/array-fns';

const total = reduce([12, 8, 5], (sum, value) => sum + value, 0);
// 25

const sentence = reduce(['Build', 'and', 'ship'], (result, word) => `${result} ${word}`);
// 'Build and ship'
```

### `reduceRight`

Combines values from right to left. Its callback receives the same arguments as `reduce`.

```ts
import { reduceRight } from '@devxbhuvn/array-fns';

const path = reduceRight(['settings', 'account', 'users'], (result, segment) => `${result}/${segment}`, '');
// '/users/account/settings'
```

### `compact`

Removes falsy values: `false`, `0`, `''`, `null`, `undefined`, and `NaN` at runtime.

```ts
import { compact } from '@devxbhuvn/array-fns';

compact([0, 1, false, 2, '', 3, null, undefined]);
// [1, 2, 3]
```

### `flatten`

Flattens nested arrays to the requested depth. The default depth is `1`. Use `Infinity` to flatten all levels. The depth must be a non-negative integer or `Infinity`.

```ts
import { flatten } from '@devxbhuvn/array-fns';

const nested = [1, [2, [3, [4]]]];

flatten(nested, 1); // [1, 2, [3, [4]]]
flatten(nested, 2); // [1, 2, 3, [4]]
flatten(nested, Infinity); // [1, 2, 3, 4]
```

### `reverse`

Returns a reversed copy of an array without mutating the input.

```ts
import { reverse } from '@devxbhuvn/array-fns';

reverse(['step 1', 'step 2', 'step 3']);
// ['step 3', 'step 2', 'step 1']
```

### `rotate`

Rotates an array to the left by the requested number of positions. Negative positions rotate to the right.

```ts
import { rotate } from '@devxbhuvn/array-fns';

rotate(['Mon', 'Tue', 'Wed', 'Thu'], 1); // ['Tue', 'Wed', 'Thu', 'Mon']
rotate(['Mon', 'Tue', 'Wed', 'Thu'], -1); // ['Thu', 'Mon', 'Tue', 'Wed']
```

### `chunk`

Splits an array into groups of a fixed size. The final group may contain fewer values. The size must be a positive integer.

```ts
import { chunk } from '@devxbhuvn/array-fns';

chunk(['A', 'B', 'C', 'D', 'E'], 2);
// [['A', 'B'], ['C', 'D'], ['E']]
```

### `zip`

Combines two arrays into pairs. The result length matches the shorter input array.

```ts
import { zip } from '@devxbhuvn/array-fns';

zip(['Maya', 'Noah'], [28, 31]);
// [['Maya', 28], ['Noah', 31]]
```

### `zipWith`

Combines corresponding values with a mapper function. Processing stops at the shorter input array.

```ts
import { zipWith } from '@devxbhuvn/array-fns';

zipWith([10, 20, 30], [2, 3, 4], (price, quantity) => price * quantity);
// [20, 60, 120]
```

### `unzip`

Converts an array of pairs into two separate arrays.

```ts
import { unzip } from '@devxbhuvn/array-fns';

unzip([
    ['Maya', 28],
    ['Noah', 31]
]);
// [['Maya', 'Noah'], [28, 31]]
```

## Slicing and grouping

### `take`

Returns the first `count` values. The default count is `1`. The count must be a non-negative integer. Counts larger than the array length return the complete array.

```ts
import { take } from '@devxbhuvn/array-fns';

const queue = ['first', 'second', 'third'];

take(queue); // ['first']
take(queue, 2); // ['first', 'second']
take(queue, 10); // ['first', 'second', 'third']
```

### `takeRight`

Returns the last `count` values.

```ts
import { takeRight } from '@devxbhuvn/array-fns';

takeRight(['log-1', 'log-2', 'log-3'], 2); // ['log-2', 'log-3']
```

### `takeWhile`

Returns values from the beginning of an array while the predicate remains `true`. It stops at the first non-matching value.

```ts
import { takeWhile } from '@devxbhuvn/array-fns';

takeWhile([2, 4, 6, 7, 8], (value) => value % 2 === 0);
// [2, 4, 6]
```

### `drop`

Removes the first `count` values and returns the remainder. The default count is `1`.

```ts
import { drop } from '@devxbhuvn/array-fns';

drop(['intro', 'chapter 1', 'chapter 2'], 1);
// ['chapter 1', 'chapter 2']
```

### `dropRight`

Removes the last `count` values and returns the remainder.

```ts
import { dropRight } from '@devxbhuvn/array-fns';

dropRight(['draft', 'review', 'published'], 1);
// ['draft', 'review']
```

### `dropWhile`

Removes values from the beginning while the predicate remains `true`, then returns the rest of the array.

```ts
import { dropWhile } from '@devxbhuvn/array-fns';

dropWhile([0, 0, 4, 5], (value) => value === 0);
// [4, 5]
```

### `groupBy`

Groups values into a record using a selector. The first argument passed to the selector is the value; the selector also receives the index and original array.

```ts
import { groupBy } from '@devxbhuvn/array-fns';

const orders = [
    { id: 1, status: 'pending' },
    { id: 2, status: 'complete' },
    { id: 3, status: 'pending' }
];

const ordersByStatus = groupBy(orders, (order) => order.status);

// ordersByStatus.pending contains orders 1 and 3
// ordersByStatus.complete contains order 2
```

The returned record has a null prototype, so selector keys such as `__proto__`, `constructor`, and `toString` are safe.

### `countBy`

Counts values by a selector result and returns a record of counts.

```ts
import { countBy } from '@devxbhuvn/array-fns';

const statuses = countBy([{ status: 'pending' }, { status: 'complete' }, { status: 'pending' }], (item) => item.status);

// { pending: 2, complete: 1 }
```

## Set operations

### `unique`

Removes duplicate values while preserving the first occurrence of each value. It uses SameValueZero equality by default and accepts an optional selector for object keys.

```ts
import { unique } from '@devxbhuvn/array-fns';

unique(['red', 'blue', 'red', 'green']);
// ['red', 'blue', 'green']

unique(
    [
        { id: 1, name: 'First record' },
        { id: 1, name: 'Duplicate record' },
        { id: 2, name: 'Second record' }
    ],
    (item) => item.id
);
// Keeps the first record for id 1 and the record for id 2
```

### `union`

Combines any number of arrays into one array of unique values. Values appear in the order of their first occurrence.

```ts
import { union } from '@devxbhuvn/array-fns';

union(['js', 'ts'], ['ts', 'css'], ['css', 'html']);
// ['js', 'ts', 'css', 'html']
```

### `difference`

Returns values from the first array that do not occur in the second array. Duplicate values from the first array are preserved when they are not excluded.

```ts
import { difference } from '@devxbhuvn/array-fns';

difference(['draft', 'review', 'published', 'review'], ['review']);
// ['draft', 'published']
```

### `intersection`

Returns unique values that occur in both arrays, preserving the order from the first array.

```ts
import { intersection } from '@devxbhuvn/array-fns';

intersection(['js', 'ts', 'css'], ['css', 'html', 'ts']);
// ['ts', 'css']
```

## Numeric ranges

### `range`

Creates an array of numbers with an exclusive end value.

```ts
import { range } from '@devxbhuvn/array-fns';

range(5); // [0, 1, 2, 3, 4]
range(2, 6); // [2, 3, 4, 5]
range(0, 10, 2); // [0, 2, 4, 6, 8]
range(5, 0, -1); // [5, 4, 3, 2, 1]
```

Rules:

- `range(end)` starts at `0` and stops before `end`.
- `range(start, end)` uses a step of `1` for ascending ranges and `-1` for descending ranges.
- `range(start, end, step)` uses the supplied non-zero finite step.
- One-argument bounds must be finite integers.
- Two-argument bounds must be finite numbers.
- A zero or non-finite step throws a `RangeError`.
- Invalid bounds throw a `TypeError`.

## Sorting and random utilities

### `sortBy`

Returns a sorted copy of an array. It accepts one or more selector functions. Selectors may return strings, numbers, bigints, booleans, dates, or `null`; multiple selectors are applied in priority order.

```ts
import { sortBy } from '@devxbhuvn/array-fns';

const tasks = [
    { title: 'Write tests', priority: 2 },
    { title: 'Fix release build', priority: 1 },
    { title: 'Update README', priority: 1 }
];

sortBy(
    tasks,
    (task) => task.priority,
    (task) => task.title
);

// Fix release build, Update README, Write tests
```

For custom comparator functions, use `sortWith`:

```ts
import { sortWith } from '@devxbhuvn/array-fns';

sortWith(['short', 'very long title', 'medium'], (left, right) => left.length - right.length);
// ['short', 'medium', 'very long title']
```

`sortBy` does not mutate the original array. `null` and `undefined` values sort after non-null values. `NaN` values sort after ordinary numbers.

### `sortWith`

Returns a sorted copy using one or more explicit comparator functions. Each comparator receives two values and returns a negative number, zero, or a positive number. Comparators are applied in order, and equal values preserve their original order.

```ts
import { sortWith } from '@devxbhuvn/array-fns';

sortWith(
    [
        { name: 'B', score: 10 },
        { name: 'A', score: 10 },
        { name: 'C', score: 5 }
    ],
    (left, right) => right.score - left.score,
    (left, right) => left.name.localeCompare(right.name)
);
```

### `shuffle`

Returns a new array with values in random order. It uses the Fisher-Yates shuffle.

```ts
import { shuffle } from '@devxbhuvn/array-fns';

const shuffledCards = shuffle(['A', 'K', 'Q', 'J']);
// The same four cards in a random order
```

Because the result is random, tests and applications should not depend on a particular order.

### `sample`

Returns one randomly selected value, or `undefined` for an empty array.

```ts
import { sample } from '@devxbhuvn/array-fns';

const featuredColor = sample(['red', 'blue', 'green']);
```

### `sampleSize`

Returns up to `size` unique positions selected in random order. If `size` is larger than the input length, all input values are returned in random order. The size must be a non-negative integer.

```ts
import { sampleSize } from '@devxbhuvn/array-fns';

sampleSize(['Maya', 'Noah', 'Ava', 'Leo'], 2);
// Two different names in random order

sampleSize(['A', 'B'], 10);
// ['A', 'B'] in random order
```

## Validation and edge cases

- `chunk` requires a positive integer size.
- `flatten` requires a non-negative integer depth or `Infinity`.
- `range` rejects invalid bounds and invalid steps.
- `sampleSize` requires a non-negative integer size.
- `take` and `drop` require non-negative integer counts.
- `takeRight` and `dropRight` truncate fractional counts toward zero; negative counts behave as zero.
- `reduce` and `reduceRight` throw when called on an empty array without an initial value.
- `first`, `last`, `find`, and `sample` return `undefined` when no value is available.
- `zip` and `zipWith` stop at the shortest input array.
- Equality-based operations preserve references to object values and do not perform deep equality checks.

## TypeScript types

The package publishes declaration files and exports these shared types:

```ts
import type { Comparator, Predicate, Selector, SortValue } from '@devxbhuvn/array-fns';
```

- `Predicate<T>` receives `(value, index, array)` and returns a boolean.
- `Selector<T, K>` receives `(value, index, array)` and returns a property key.
- `Comparator<T>` receives two values and returns a number less than, equal to, or greater than zero.
- `SortValue` describes values supported by selector-based sorting.

## Package output

The package publishes:

- ESM output for modern bundlers
- CommonJS output for Node.js and CommonJS applications
- TypeScript declaration files

The package is marked with `sideEffects: false`, allowing bundlers to remove unused functions through tree-shaking.

## License

MIT
