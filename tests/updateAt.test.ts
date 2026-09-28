import { describe, expect, it } from 'vitest';
import { updateAt } from '../src';

describe('updateAt', () => {
    it('updates a value at an index', () => {
        expect(updateAt([1, 2, 3], 1, (value) => value * 10)).toEqual([1, 20, 3]);
    });
});
