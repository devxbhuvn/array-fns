# Changelog

All notable changes to this project will be documented in this file.

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
