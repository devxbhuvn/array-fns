import { describe, expect, it } from 'vitest';
import { intersperse } from '../src';

describe('intersperse', () => {
    it('inserts a separator between items', () => {
        expect(intersperse([1, 2, 3], 0)).toEqual([1, 0, 2, 0, 3]);
    });
});
