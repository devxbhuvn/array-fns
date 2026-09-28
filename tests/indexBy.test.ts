import { describe, expect, it } from 'vitest';
import { indexBy } from '../src';

describe('indexBy', () => {
    it('aliases keyBy', () => {
        expect(indexBy([{ id: 1 }], (item) => item.id)[1]).toEqual({ id: 1 });
    });
});
