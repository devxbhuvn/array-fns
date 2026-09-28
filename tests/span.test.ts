import { describe, expect, it } from 'vitest';
import { span } from '../src';

describe('span', () => {
    it('returns the longest matching prefix', () => {
        expect(span([1, 2, 3, 4], (value) => value < 3)).toEqual([
            [1, 2],
            [3, 4]
        ]);
    });
});
