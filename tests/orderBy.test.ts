import { describe, expect, it } from 'vitest';
import { orderBy } from '../src';

describe('orderBy', () => {
    it('sorts with directions', () => {
        const items = [
            { name: 'b', age: 1 },
            { name: 'a', age: 2 },
            { name: 'a', age: 1 }
        ];
        expect(orderBy(items, [(item) => item.name, (item) => item.age], ['asc', 'desc'])).toEqual([
            { name: 'a', age: 2 },
            { name: 'a', age: 1 },
            { name: 'b', age: 1 }
        ]);
    });
});
