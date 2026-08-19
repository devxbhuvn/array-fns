import { describe, expect, it } from 'vitest';
import { compact } from '../src';

describe('compact', () => {
    it('removes falsey values', () => {
        expect(compact([0, 1, false, 2, '', 3, null, undefined, NaN])).toEqual([1, 2, 3]);
    });

    it('returns an empty array for empty input', () => {
        expect(compact([])).toEqual([]);
    });
});
