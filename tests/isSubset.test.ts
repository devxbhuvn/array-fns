import { describe, expect, it } from 'vitest';
import { isSubset } from '../src';

describe('isSubset', () => {
    it('checks subset membership', () => {
        expect(isSubset([1, 2], [1, 2, 3])).toBe(true);
        expect(isSubset([1, 4], [1, 2, 3])).toBe(false);
    });
});
