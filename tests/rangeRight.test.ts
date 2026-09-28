import { describe, expect, it } from 'vitest';
import { rangeRight } from '../src';

describe('rangeRight', () => {
    it('reverses a simple range', () => {
        expect(rangeRight(5)).toEqual([4, 3, 2, 1, 0]);
    });

    it('reverses a stepped range', () => {
        expect(rangeRight(0, 5, 2)).toEqual([4, 2, 0]);
    });
});
