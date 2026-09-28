import { describe, expect, it } from 'vitest';
import { unionWith } from '../src';

describe('unionWith', () => {
    it('merges with a custom comparator', () => {
        expect(unionWith((a, b) => a.id === b.id, [{ id: 1 }], [{ id: 1 }, { id: 2 }])).toEqual([{ id: 1 }, { id: 2 }]);
    });
});
