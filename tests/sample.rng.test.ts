import { describe, expect, it } from 'vitest';
import { sample, sampleSize, shuffle, sampleWeighted } from '../src';

describe('optional RNG', () => {
    it('sample uses injected random', () => {
        expect(sample([10, 20, 30], () => 0)).toBe(10);
        expect(sample([10, 20, 30], () => 0.99)).toBe(30);
    });

    it('sampleSize is deterministic with injected random', () => {
        expect(sampleSize([1, 2, 3, 4], 2, () => 0)).toEqual([1, 2]);
    });

    it('shuffle is deterministic with injected random', () => {
        expect(shuffle([1, 2, 3], () => 0)).toEqual([2, 3, 1]);
    });

    it('sampleWeighted uses injected random', () => {
        expect(sampleWeighted(['a', 'b'], [1, 1], () => 0)).toBe('a');
        expect(sampleWeighted(['a', 'b'], [1, 1], () => 0.9)).toBe('b');
    });
});
