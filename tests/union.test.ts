import { describe, expect, it } from 'vitest';
import { union } from '../src';

describe('union', () => {
    it('merges arrays and removes duplicates', () => {
        expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
    });
});
