import { describe, expect, it } from 'vitest';
import { dropUntil } from '../src';

describe('dropUntil', () => {
    it('drops until the predicate matches', () => {
        expect(dropUntil([1, 2, 3, 4], (value) => value === 3)).toEqual([3, 4]);
        expect(dropUntil([1, 2], (value) => value === 9)).toEqual([]);
    });
});
