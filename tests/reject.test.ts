import { describe, expect, it } from 'vitest';
import { reject } from '../src';

describe('reject', () => {
    it('filters out matching values', () => {
        expect(reject([1, 2, 3, 4], (value) => value % 2 === 0)).toEqual([1, 3]);
    });
});
