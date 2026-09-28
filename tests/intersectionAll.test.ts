import { describe, expect, it } from 'vitest';
import { intersectionAll } from '../src';

describe('intersectionAll', () => {
    it('intersects many arrays', () => {
        expect(intersectionAll([1, 2, 3, 4], [2, 3, 5], [2, 3, 9])).toEqual([2, 3]);
    });

    it('returns empty for no arrays', () => {
        expect(intersectionAll()).toEqual([]);
    });

    it('copies a single array', () => {
        expect(intersectionAll([1, 2])).toEqual([1, 2]);
    });
});
