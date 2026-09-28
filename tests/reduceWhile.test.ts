import { describe, expect, it } from 'vitest';
import { reduceWhile } from '../src';

describe('reduceWhile', () => {
    it('stops when predicate fails', () => {
        expect(
            reduceWhile(
                [1, 2, 3, 4],
                (sum, value) => sum + value <= 6,
                (sum, value) => sum + value,
                0
            )
        ).toBe(6);
    });
});
