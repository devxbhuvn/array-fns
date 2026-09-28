import { describe, expect, it } from 'vitest';
import { median } from '../src';

describe('median', () => {
    it('returns the median value', () => {
        expect(median([1, 3, 2])).toBe(2);
        expect(median([1, 2, 3, 4])).toBe(2.5);
        expect(median([])).toBeUndefined();
    });
});
