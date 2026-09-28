import { describe, expect, it } from 'vitest';
import { partitionBy } from '../src';

describe('partitionBy', () => {
    it('returns consecutive key runs as tuples', () => {
        expect(partitionBy([1, 1, 2, 2, 1], (value) => value)).toEqual([
            [1, [1, 1]],
            [2, [2, 2]],
            [1, [1]]
        ]);
    });

    it('returns empty for empty input', () => {
        expect(partitionBy([], (value) => value)).toEqual([]);
    });
});
