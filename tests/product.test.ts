import { describe, expect, it } from 'vitest';
import { product } from '../src';

describe('product', () => {
    it('multiplies finite numbers', () => {
        expect(product([2, 3, 4])).toBe(24);
        expect(product([])).toBe(1);
    });
});
