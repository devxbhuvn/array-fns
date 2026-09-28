# Changelog

All notable changes to this project will be documented in this file.

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
