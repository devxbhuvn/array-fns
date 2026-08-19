import { describe, expect, it } from 'vitest';
import { groupBy } from '../src';

describe('groupBy', () => {
    it('groups values by selector', () => {
        expect(groupBy(['a', 'b', 'a'], (value) => value)).toEqual({ a: ['a', 'a'], b: ['b'] });
    });

    it('works with object arrays', () => {
        const users = [
            { id: 1, role: 'admin' },
            { id: 2, role: 'user' },
            { id: 3, role: 'admin' }
        ];

        expect(groupBy(users, (user) => user.role)).toEqual({
            admin: [
                { id: 1, role: 'admin' },
                { id: 3, role: 'admin' }
            ],
            user: [{ id: 2, role: 'user' }]
        });
    });
});
