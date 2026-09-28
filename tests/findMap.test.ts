import { describe, expect, it } from 'vitest';
import { findMap } from '../src';

describe('findMap', () => {
    it('returns the first defined mapped value', () => {
        expect(findMap([1, 2, 3], (value) => (value > 1 ? value * 10 : undefined))).toBe(20);
    });

    it('returns undefined when nothing maps', () => {
        expect(findMap([1, 2], () => undefined)).toBeUndefined();
    });
});
