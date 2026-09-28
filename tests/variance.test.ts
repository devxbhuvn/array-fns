import { describe, expect, it } from 'vitest';
import { variance } from '../src';

describe('variance', () => {
    it('computes population variance', () => {
        expect(variance([2, 4, 4, 4, 5, 5, 7, 9])).toBe(4);
    });

    it('returns undefined for empty', () => {
        expect(variance([])).toBeUndefined();
    });
});
