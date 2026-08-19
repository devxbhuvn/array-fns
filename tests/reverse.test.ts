import { describe, expect, it } from 'vitest';
import { reverse } from '../src';

describe('reverse', () => {
    it('returns values in reverse order', () => {
        expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    });

    it('does not mutate the input', () => {
        const input = [1, 2, 3];
        expect(reverse(input)).not.toBe(input);
        expect(input).toEqual([1, 2, 3]);
    });

    it('handles empty and singleton arrays', () => {
        expect(reverse([])).toEqual([]);
        expect(reverse(['only'])).toEqual(['only']);
    });
});
