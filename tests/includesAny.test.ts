import { describe, expect, it } from 'vitest';
import { includesAny } from '../src';

describe('includesAny', () => {
    it('checks membership for any value', () => {
        expect(includesAny([1, 2, 3], [4, 2])).toBe(true);
        expect(includesAny([1, 2], [4, 5])).toBe(false);
    });
});
