import { describe, expect, it } from 'vitest';
import { last } from '../src';

describe('last', () => {
    it('returns the last item', () => {
        expect(last([1, 2, 3])).toBe(3);
    });

    it('returns undefined for an empty array', () => {
        expect(last([])).toBeUndefined();
    });
});
