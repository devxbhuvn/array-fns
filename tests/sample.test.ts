import { describe, expect, it } from 'vitest';
import { sample } from '../src';

describe('sample', () => {
    it('returns an item from the array', () => {
        const values = [1, 2, 3, 4];
        const value = sample(values);
        expect(value).not.toBeUndefined();
        expect(values).toContain(value as number);
    });

    it('returns undefined for empty arrays', () => {
        expect(sample([])).toBeUndefined();
    });
});
