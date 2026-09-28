import { describe, expect, it } from 'vitest';
import { at } from '../src';

describe('at', () => {
    it('supports negative indexes', () => {
        expect(at([1, 2, 3], -1)).toBe(3);
        expect(at([1, 2, 3], 1)).toBe(2);
        expect(at([1, 2, 3], 10)).toBeUndefined();
    });
});
