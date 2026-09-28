import { describe, expect, it } from 'vitest';
import { setAt } from '../src';

describe('setAt', () => {
    it('sets a value at an index', () => {
        expect(setAt([1, 2, 3], 1, 9)).toEqual([1, 9, 3]);
    });
});
