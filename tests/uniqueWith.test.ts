import { describe, expect, it } from 'vitest';
import { uniqueWith } from '../src';

describe('uniqueWith', () => {
    it('dedupes with a custom comparator', () => {
        expect(uniqueWith([{ id: 1 }, { id: 1 }, { id: 2 }], (a, b) => a.id === b.id)).toEqual([{ id: 1 }, { id: 2 }]);
    });
});
