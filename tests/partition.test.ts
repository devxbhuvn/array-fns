import { describe, expect, it } from 'vitest';
import { partition } from '../src';

describe('partition', () => {
    it('splits values into two arrays', () => {
        const result = partition([1, 2, 3, 4], (value) => value % 2 === 0);
        expect(result).toEqual([
            [2, 4],
            [1, 3]
        ]);
    });
});
