import { describe, expect, it } from 'vitest';
import { scan } from '../src';

describe('scan', () => {
    it('returns intermediate accumulators', () => {
        expect(scan([1, 2, 3], (sum, value) => sum + value, 0)).toEqual([1, 3, 6]);
    });
});
