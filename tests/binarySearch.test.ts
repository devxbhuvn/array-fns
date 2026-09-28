import { describe, expect, it } from 'vitest';
import { binarySearch } from '../src';

describe('binarySearch', () => {
    it('finds values in a sorted array', () => {
        expect(binarySearch([1, 3, 5, 7], 5)).toBe(2);
        expect(binarySearch([1, 3, 5, 7], 4)).toBe(-1);
    });
});
