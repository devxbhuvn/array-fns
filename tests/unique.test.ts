import { describe, expect, it } from 'vitest';
import { unique } from '../src';

describe('unique', () => {
    it('removes duplicates from a primitive array', () => {
        expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
    });

    it('removes duplicates by selector', () => {
        const users = [
            { id: 1, name: 'Alice' },
            { id: 1, name: 'Alice duplicate' },
            { id: 2, name: 'Bob' }
        ];

        expect(unique(users, (user) => user.id)).toEqual([
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' }
        ]);
    });

    it('treats NaN as equal', () => {
        expect(unique([NaN, NaN, 1])).toEqual([NaN, 1]);
    });

    it('calls selector once per input item with the original context', () => {
        const input = [{ id: 1 }, { id: 1 }, { id: 2 }];
        const calls: Array<[number, number, readonly { id: number }[]]> = [];

        unique(input, (value, index, array) => {
            calls.push([value.id, index, array]);
            return value.id;
        });

        expect(calls).toEqual([
            [1, 0, input],
            [1, 1, input],
            [2, 2, input]
        ]);
    });
});
