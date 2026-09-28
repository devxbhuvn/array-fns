import { describe, expect, it } from 'vitest';
import { mean } from '../src';

describe('mean', () => {
    it('returns the arithmetic mean', () => {
        expect(mean([2, 4, 6])).toBe(4);
        expect(mean([])).toBeUndefined();
    });
});
