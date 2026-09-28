import { describe, expect, it } from 'vitest';
import { frequencies } from '../src';

describe('frequencies', () => {
    it('counts values', () => {
        expect(Object.fromEntries(frequencies([1, 2, 1, 1, 3]))).toEqual({ 1: 3, 2: 1, 3: 1 });
    });

    it('counts by selector', () => {
        const map = frequencies([{ t: 'a' }, { t: 'a' }, { t: 'b' }], (item) => item.t);
        expect(map.get('a')).toBe(2);
        expect(map.get('b')).toBe(1);
    });
});
