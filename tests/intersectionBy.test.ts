import { describe, expect, it } from 'vitest';
import { intersectionBy } from '../src';

describe('intersectionBy', () => {
    it('intersects by selector key', () => {
        expect(intersectionBy([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }], (item) => item.id)).toEqual([{ id: 2 }]);
    });
});
