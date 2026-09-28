import { describe, expect, it } from 'vitest';
import { repeat } from '../src';

describe('repeat', () => {
    it('repeats a value', () => {
        expect(repeat('x', 3)).toEqual(['x', 'x', 'x']);
        expect(() => repeat('x', -1)).toThrow(RangeError);
    });
});
