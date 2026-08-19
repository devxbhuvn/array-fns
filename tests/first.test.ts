import { describe, expect, it } from 'vitest';
import { first } from '../src';

describe('first', () => {
    it('returns the first item', () => {
        expect(first([10, 20, 30])).toBe(10);
    });

    it('returns undefined for an empty array', () => {
        expect(first([])).toBeUndefined();
    });
});
