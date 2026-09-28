import { describe, expect, it } from 'vitest';
import { groupToMap } from '../src';

describe('groupToMap', () => {
    it('groups into a Map', () => {
        const items = [
            { type: 'a', n: 1 },
            { type: 'b', n: 2 },
            { type: 'a', n: 3 }
        ];
        const grouped = groupToMap(items, (item) => item.type);
        expect(grouped.get('a')).toEqual([
            { type: 'a', n: 1 },
            { type: 'a', n: 3 }
        ]);
        expect(grouped.get('b')).toEqual([{ type: 'b', n: 2 }]);
    });

    it('returns an empty Map for empty input', () => {
        expect(groupToMap([], (value) => value).size).toBe(0);
    });
});
