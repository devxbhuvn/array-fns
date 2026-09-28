# Changelog

All notable changes to this project will be documented in this file.

## 2.0.0

### Added

- Map-first helpers: `groupToMap`, `indexToMap`, `frequencies`, `countWhere`.
- Transform helpers: `findMap`, `compactMap`, `reduceWhile`, `partitionBy`, `flatMapDeep`.
- Slice symmetry: `takeLastWhile`, `dropLastWhile`.
- N-ary set ops: `intersectionAll`, `differenceAll`.
- Stats: `extent`, `variance`, `stdDev`.
- Create / edit: `rangeRight`, `clampIndex`, `splice`, `replace`.
- Type-guard overloads for `filter`, `find`, `findLast`, and `takeWhile`.
- Stronger tuple overloads for `zipMany`, `cartesian`, and `interleave`.
- Optional `random?: () => number` on `sample`, `sampleSize`, `shuffle`, and `sampleWeighted`.
- Shared `compareValues` util for `sortBy` / `orderBy`.
- Per-function deep exports (for example `@devxbhuvn/array-fns/unique`).
- Vitest coverage thresholds, `size-limit` budget, and `CHANGELOG.md` in the published package.
- Shared types: `RandomSource`, `TypeGuardPredicate`.

### Changed

- Node.js engine requirement is now `>=20`.
- Package version is `2.0.0`.

### Removed

- Aliases `nth`, `indexBy`, `rest`, `choice`, and `uniqueBy`. Use `at`, `keyBy`, `tail`, `sample`, and `unique` instead.

## 1.1.0

### Added

- Large expansion of the public API across lookup, aggregates, filtering, set operations, sorting, slicing, immutable edits, windows, zip helpers, search, creation, and scan utilities.
- New functions include: `keyBy`, `indexBy`, `at`, `nth`, `pluck`, `findLast`, `findLastIndex`, `max`, `min`, `maxBy`, `minBy`, `sum`, `sumBy`, `mean`, `meanBy`, `product`, `mode`, `median`, `percentile`, `reject`, `none`, `without`, `compactBy`, `includesAll`, `includesAny`, `isEmpty`, `xor`, `xorBy`, `differenceBy`, `intersectionBy`, `unionBy`, `uniqueBy`, `differenceWith`, `intersectionWith`, `unionWith`, `uniqueWith`, `isSubset`, `isSuperset`, `orderBy`, `sortedIndex`, `sortedUnique`, `isSorted`, `takeUntil`, `dropUntil`, `initial`, `tail`, `rest`, `splitAt`, `splitWhen`, `span`, `insertAt`, `removeAt`, `updateAt`, `setAt`, `move`, `swap`, `fill`, `sliding`, `chunkBy`, `intersperse`, `interleave`, `transpose`, `flattenDeep`, `zipLongest`, `zipObject`, `zipMany`, `unzipWith`, `cartesian`, `startsWith`, `endsWith`, `equals`, `binarySearch`, `sampleWeighted`, `choice`, `repeat`, `times`, `castArray`, `scan`, and `tap`.
- Shared types: `EqualityComparator`, `OrderDirection`, and `Iteratee`.
- `prepublishOnly` build hook for safer manual publishes.

### Changed

- Equality helpers (`unique`, `union`, `difference`, `intersection`) now use `Set`/`Map` for SameValueZero membership checks.
- `sampleSize` uses a partial Fisher–Yates shuffle.
- `findIndex` clamps largely negative `fromIndex` values to the start of the array (aligned with `includes` / native `Array#findIndex`).
- Upgraded development tooling to ESLint 9 (flat config) and Vitest 3.

### Fixed

- Example imports now resolve during `npm run typecheck`.
- `compact` typing treats additional falsy cases more accurately (`0n` included in the excluded union).

## 1.0.2

### Fixed

- Align `includes`, `indexOf`, and `lastIndexOf` with JavaScript search semantics for `NaN` start indexes.

## 1.0.1

### Fixed

- Normalize fractional and `NaN` starting indexes in `findIndex`.
- Ensure `unique` selector callbacks are called once per input item with the original index and array.

## 1.0.0

### Added

- Stable public release of `@devxbhuvn/array-fns`.
- Explicit `sortWith` comparator API.
- Complete per-function test coverage for the public API.

### Changed

- `sortBy` now accepts selectors only and correctly passes selector indexes and the original input array.
- Sorting now handles `NaN`, `null`, and `undefined` consistently.

## 0.1.0

### Added

- Initial release of `@devxbhuvn/array-fns`.
- Core immutable array utilities and TypeScript-first API.
- Unit tests for public functions.
- Documentation and examples for everyday usage.
