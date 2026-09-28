import { describe, expect, it } from 'vitest';
import { differenceAll } from '../src';

describe('differenceAll', () => {
    it('excludes values from any other array', () => {
        expect(differenceAll([1, 2, 3, 4], [2], [4, 5])).toEqual([1, 3]);
    });

    it('copies when no others are given', () => {
        expect(differenceAll([1, 2])).toEqual([1, 2]);
    });
});
