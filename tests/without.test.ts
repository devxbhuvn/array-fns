import { describe, expect, it } from 'vitest';
import { without } from '../src';

describe('without', () => {
    it('removes provided values', () => {
        expect(without([1, 2, 3, 1], 1, 3)).toEqual([2]);
        expect(without([Number.NaN, 1], Number.NaN)).toEqual([1]);
    });
});
