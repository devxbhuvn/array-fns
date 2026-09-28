import { describe, expect, it } from 'vitest';
import { differenceWith } from '../src';

describe('differenceWith', () => {
    it('uses a custom comparator', () => {
        expect(differenceWith([{ id: 1 }, { id: 2 }], [{ id: 2 }], (a, b) => a.id === b.id)).toEqual([{ id: 1 }]);
    });
});
