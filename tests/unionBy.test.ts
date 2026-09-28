import { describe, expect, it } from 'vitest';
import { unionBy } from '../src';

describe('unionBy', () => {
    it('unions by selector key', () => {
        expect(unionBy((item) => item.id, [{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }])).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    });
});
