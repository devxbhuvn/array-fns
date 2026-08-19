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
});
