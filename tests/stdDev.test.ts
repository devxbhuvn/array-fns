import { describe, expect, it } from 'vitest';
import { stdDev } from '../src';

describe('stdDev', () => {
    it('computes population stddev', () => {
        expect(stdDev([2, 4, 4, 4, 5, 5, 7, 9])).toBe(2);
    });

    it('returns undefined for empty', () => {
        expect(stdDev([])).toBeUndefined();
    });
});
