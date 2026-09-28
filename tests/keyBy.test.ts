import { describe, expect, it } from 'vitest';
import { keyBy } from '../src';

describe('keyBy', () => {
    it('indexes items by selector', () => {
        const items = [
            { id: 'a', n: 1 },
            { id: 'b', n: 2 },
            { id: 'a', n: 3 }
        ];
        expect(keyBy(items, (item) => item.id)).toEqual({ a: { id: 'a', n: 3 }, b: { id: 'b', n: 2 } });
    });
});
