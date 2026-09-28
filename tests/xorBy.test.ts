import { describe, expect, it } from 'vitest';
import { xorBy } from '../src';

describe('xorBy', () => {
    it('returns symmetric difference by key', () => {
        expect(xorBy([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }], (item) => item.id)).toEqual([{ id: 1 }, { id: 3 }]);
    });
});
