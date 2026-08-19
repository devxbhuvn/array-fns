import { describe, expect, it } from 'vitest';
import { countBy } from '../src';

describe('countBy', () => {
    it('counts by selector result', () => {
        expect(countBy(['apple', 'banana', 'apple'], (value) => value)).toEqual({ apple: 2, banana: 1 });
    });

    it('works with object arrays', () => {
        const users = [{ role: 'admin' }, { role: 'user' }, { role: 'admin' }];

        expect(countBy(users, (user) => user.role)).toEqual({ admin: 2, user: 1 });
    });
});
