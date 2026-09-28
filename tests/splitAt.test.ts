import { describe, expect, it } from 'vitest';
import { splitAt } from '../src';

describe('splitAt', () => {
    it('splits at an index', () => {
        expect(splitAt([1, 2, 3, 4], 2)).toEqual([
            [1, 2],
            [3, 4]
        ]);
    });
});
