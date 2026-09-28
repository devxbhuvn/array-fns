import { describe, expect, it } from 'vitest';
import { xor } from '../src';

describe('xor', () => {
    it('returns the symmetric difference', () => {
        expect(xor([1, 2, 3], [2, 4])).toEqual([1, 3, 4]);
    });
});
