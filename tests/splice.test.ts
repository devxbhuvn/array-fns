import { describe, expect, it } from 'vitest';
import { splice } from '../src';

describe('splice', () => {
    it('removes and inserts immutably', () => {
        const input = [1, 2, 3, 4];
        expect(splice(input, 1, 2, 9, 8)).toEqual([1, 9, 8, 4]);
        expect(input).toEqual([1, 2, 3, 4]);
    });

    it('throws for invalid deleteCount', () => {
        expect(() => splice([1], 0, -1)).toThrow(RangeError);
    });
});
