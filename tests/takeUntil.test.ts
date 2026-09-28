import { describe, expect, it } from 'vitest';
import { takeUntil } from '../src';

describe('takeUntil', () => {
    it('takes until the predicate matches', () => {
        expect(takeUntil([1, 2, 3, 4], (value) => value === 3)).toEqual([1, 2]);
    });
});
