import { describe, expect, it } from 'vitest';
import { sortBy } from '../src';

describe('sortBy', () => {
    it('sorts by a selector', () => {
        const users: Array<{ name: string; age: number }> = [
            { name: 'Bob', age: 20 },
            { name: 'Alice', age: 30 }
        ];

        expect(sortBy(users, (user: { name: string; age: number }) => user.age)).toEqual([
            { name: 'Bob', age: 20 },
            { name: 'Alice', age: 30 }
        ]);
    });

    it('supports multiple selectors', () => {
        const users: Array<{ name: string; age: number }> = [
            { name: 'Bob', age: 30 },
            { name: 'Alice', age: 30 },
            { name: 'Charlie', age: 20 }
        ];

        expect(
            sortBy(
                users,
                (user: { name: string; age: number }) => user.age,
                (user: { name: string; age: number }) => user.name
            )
        ).toEqual([
            { name: 'Charlie', age: 20 },
            { name: 'Alice', age: 30 },
            { name: 'Bob', age: 30 }
        ]);
    });

    it('does not mutate the original array', () => {
        const input = [3, 1, 2];
        sortBy(input, (value: number) => value);
        expect(input).toEqual([3, 1, 2]);
    });

    it('passes the original index and array to selectors', () => {
        const input = [30, 10, 20];
        const calls: Array<[number, number, readonly number[]]> = [];

        sortBy(input, (value, index, array) => {
            calls.push([value, index, array]);
            return value;
        });

        expect(calls).toEqual([
            [30, 0, input],
            [10, 1, input],
            [20, 2, input]
        ]);
    });

    it('sorts undefined and NaN values consistently', () => {
        expect(sortBy([3, Number.NaN, 1, undefined], (value) => value)).toEqual([1, 3, Number.NaN, undefined]);
    });
});
