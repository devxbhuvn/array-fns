import { describe, expect, it } from 'vitest';
import { removeAt } from '../src';

describe('removeAt', () => {
    it('removes a value at an index', () => {
        expect(removeAt([1, 2, 3], 1)).toEqual([1, 3]);
        expect(removeAt([1, 2, 3], -1)).toEqual([1, 2]);
    });
});
