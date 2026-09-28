import { describe, expect, it } from 'vitest';
import { interleave } from '../src';

describe('interleave', () => {
    it('weaves arrays together', () => {
        expect(interleave([1, 2], ['a', 'b', 'c'])).toEqual([1, 'a', 2, 'b', 'c']);
    });
});
