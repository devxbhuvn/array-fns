import { describe, expect, it } from 'vitest';
import { includesAll } from '../src';

describe('includesAll', () => {
    it('checks membership for all values', () => {
        expect(includesAll([1, 2, 3], [1, 3])).toBe(true);
        expect(includesAll([1, 2], [1, 4])).toBe(false);
    });
});
