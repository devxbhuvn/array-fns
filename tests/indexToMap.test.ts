import { describe, expect, it } from 'vitest';
import { indexToMap } from '../src';

describe('indexToMap', () => {
    it('indexes by key keeping last wins', () => {
        const map = indexToMap(
            [
                { id: 1, name: 'a' },
                { id: 1, name: 'b' },
                { id: 2, name: 'c' }
            ],
            (item) => item.id
        );
        expect(map.get(1)).toEqual({ id: 1, name: 'b' });
        expect(map.get(2)).toEqual({ id: 2, name: 'c' });
    });
});
