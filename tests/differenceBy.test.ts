import { describe, expect, it } from 'vitest';
import { differenceBy } from '../src';

describe('differenceBy', () => {
    it('excludes by selector key', () => {
        expect(differenceBy([{ id: 1 }, { id: 2 }], [{ id: 2 }], (item) => item.id)).toEqual([{ id: 1 }]);
    });
});
