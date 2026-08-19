# Contributing to `@devxbhuvn/array-fns`

Thank you for helping improve this project. Contributions should preserve the package's focus: small, immutable, dependency-free, TypeScript-first array utilities.

## Before You Start

- Search existing issues and pull requests before opening a new one.
- For significant API changes, open an issue first so the design can be discussed.
- Do not include secrets, access tokens, or private data in issues or pull requests.
- Read the [Code of Conduct](CODE_OF_CONDUCT.md).

## Development Setup

Requirements:

- Node.js 18 or newer
- npm

Install dependencies from the lockfile:

```bash
npm ci
```

## Project Structure

- `src/functions/`: Public array utility implementations.
- `src/types/`: Shared TypeScript types.
- `src/utils/`: Internal helpers.
- `tests/`: Vitest tests, with one test file per public function.
- `examples/`: Usage examples.
- `README.md`: End-user documentation.

## Adding or Changing a Function

1. Add or update the implementation under `src/functions/`.
2. Export the function from `src/index.ts`.
3. Add a matching test file under `tests/`.
4. Cover normal, empty, boundary, invalid-input, callback, and immutability behavior where applicable.
5. Update the README with the signature, behavior, and a practical example.
6. Update `CHANGELOG.md` when the change affects users.

Public functions should accept readonly arrays and should not mutate their inputs unless a documented API explicitly requires different behavior.

## Useful Commands

```bash
npm run typecheck
npm test
npm run lint
npm run format:check
npm run build
npm run pack:check
```

Run the complete validation sequence before opening a pull request:

```bash
npm run typecheck && npm test && npm run lint && npm run format:check && npm run build && npm run pack:check
```

## Pull Requests

Pull requests should:

- Explain the problem and the proposed solution.
- Keep changes focused and avoid unrelated refactoring.
- Include tests for behavior changes.
- Update documentation when the public API changes.
- Pass all validation commands.
- Include any compatibility or performance considerations.

Do not commit generated `dist` output, `coverage`, `node_modules`, npm logs, or local release notes.

## Commit and Release Notes

Use clear commit messages that describe the change. Package releases are performed manually by project maintainers. Do not change the package version in a feature pull request unless the maintainer requests it.
