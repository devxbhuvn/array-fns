import { describe, expect, it } from 'vitest';
import { uniqueBy } from '../src';

describe('uniqueBy', () => {
    it('aliases unique with a selector', () => {
        expect(uniqueBy([{ id: 1 }, { id: 1 }], (item) => item.id)).toEqual([{ id: 1 }]);
    });
});
