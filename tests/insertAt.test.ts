import { describe, expect, it } from 'vitest';
import { insertAt } from '../src';

describe('insertAt', () => {
    it('inserts values at an index', () => {
        expect(insertAt([1, 4], 1, 2, 3)).toEqual([1, 2, 3, 4]);
        const input = [1, 2];
        insertAt(input, 1, 9);
        expect(input).toEqual([1, 2]);
    });
});
