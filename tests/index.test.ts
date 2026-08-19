import { describe, expect, it } from 'vitest';
import * as api from '../src';
import { countBy, groupBy, unique, chunk } from '../src';

describe('array-fns', () => {
    it('exports the complete public API', () => {
        expect(Object.keys(api).sort()).toEqual([
            'chunk',
            'compact',
            'count',
            'countBy',
            'difference',
            'drop',
            'dropRight',
            'dropWhile',
            'every',
            'filter',
            'find',
            'findIndex',
            'first',
            'flatMap',
            'flatten',
            'groupBy',
            'includes',
            'indexOf',
            'intersection',
            'last',
            'lastIndexOf',
            'map',
            'partition',
            'range',
            'reduce',
            'reduceRight',
            'reverse',
            'rotate',
            'sample',
            'sampleSize',
            'shuffle',
            'some',
            'sortBy',
            'sortWith',
            'take',
            'takeRight',
            'takeWhile',
            'union',
            'unique',
            'unzip',
            'zip',
            'zipWith'
        ]);
    });

    it('returns unique values', () => {
        expect(unique([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
    });

    it('chunks an array into groups of size n', () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    it('groups values by a selector', () => {
        const items = [
            { type: 'fruit', value: 'apple' },
            { type: 'fruit', value: 'banana' },
            { type: 'veg', value: 'carrot' }
        ];

        expect(groupBy(items, (item) => item.type)).toEqual({
            fruit: [
                { type: 'fruit', value: 'apple' },
                { type: 'fruit', value: 'banana' }
            ],
            veg: [{ type: 'veg', value: 'carrot' }]
        });
    });

    it('supports keys inherited by ordinary objects', () => {
        const values = ['__proto__', 'constructor', 'toString'];
        const grouped = groupBy(values, (value) => value);
        const counted = countBy(values, (value) => value);

        expect(Object.getPrototypeOf(grouped)).toBeNull();
        expect(Object.getPrototypeOf(counted)).toBeNull();
        expect(grouped['__proto__']).toEqual(['__proto__']);
        expect(grouped.constructor).toEqual(['constructor']);
        expect(grouped.toString).toEqual(['toString']);
        expect(counted['__proto__']).toBe(1);
        expect(counted.constructor).toBe(1);
        expect(counted.toString).toBe(1);
    });
});
