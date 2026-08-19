import { describe, expect, it } from 'vitest';
import { find } from '../src';

describe('find', () => {
    it('returns the first matching value', () => {
        expect(find([4, 7, 9, 7], (value) => value > 5)).toBe(7);
    });

    it('returns undefined when no value matches or the input is empty', () => {
        expect(find([1, 2], (value) => value > 5)).toBeUndefined();
        expect(find([], () => true)).toBeUndefined();
    });

    it('passes the value, index, and original array to the predicate', () => {
        const input = [10, 20];
        const calls: unknown[][] = [];
        find(input, (value, index, array) => {
            calls.push([value, index, array]);
            return value === 20;
        });
        expect(calls).toEqual([
            [10, 0, input],
            [20, 1, input]
        ]);
    });
});
