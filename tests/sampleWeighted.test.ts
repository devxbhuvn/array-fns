import { describe, expect, it } from 'vitest';
import { sampleWeighted } from '../src';

describe('sampleWeighted', () => {
    it('returns undefined for an empty array', () => {
        expect(sampleWeighted([], [])).toBeUndefined();
    });

    it('returns the only weighted item', () => {
        expect(sampleWeighted(['a'], [1])).toBe('a');
    });

    it('rejects invalid weights', () => {
        expect(() => sampleWeighted(['a'], [0])).toThrow(RangeError);
        expect(() => sampleWeighted(['a', 'b'], [1])).toThrow(RangeError);
    });
});
