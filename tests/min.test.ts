import { describe, expect, it } from 'vitest';
import { min } from '../src';

describe('min', () => {
    it('returns the minimum finite number', () => {
        expect(min([1, 5, 3])).toBe(1);
        expect(min([])).toBeUndefined();
    });
});
