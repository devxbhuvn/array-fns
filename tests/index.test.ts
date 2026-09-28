import { describe, expect, it } from 'vitest';
import * as api from '../src';
import { countBy, groupBy, unique, chunk } from '../src';

describe('array-fns', () => {
    it('exports the complete public API', () => {
        expect(Object.keys(api).sort()).toEqual([
            'at',
            'binarySearch',
            'cartesian',
            'castArray',
            'choice',
            'chunk',
            'chunkBy',
            'compact',
            'compactBy',
            'count',
            'countBy',
            'difference',
            'differenceBy',
            'differenceWith',
            'drop',
            'dropRight',
            'dropUntil',
            'dropWhile',
            'endsWith',
            'equals',
            'every',
            'fill',
            'filter',
            'find',
            'findIndex',
            'findLast',
            'findLastIndex',
            'first',
            'flatMap',
            'flatten',
            'flattenDeep',
            'groupBy',
            'includes',
            'includesAll',
            'includesAny',
            'indexBy',
            'indexOf',
            'initial',
            'insertAt',
            'interleave',
            'intersection',
            'intersectionBy',
            'intersectionWith',
            'intersperse',
            'isEmpty',
            'isSorted',
            'isSubset',
            'isSuperset',
            'keyBy',
            'last',
            'lastIndexOf',
            'map',
            'max',
            'maxBy',
            'mean',
            'meanBy',
            'median',
            'min',
            'minBy',
            'mode',
            'move',
            'none',
            'nth',
            'orderBy',
            'partition',
            'percentile',
            'pluck',
            'product',
            'range',
            'reduce',
            'reduceRight',
            'reject',
            'removeAt',
            'repeat',
            'rest',
            'reverse',
            'rotate',
            'sample',
            'sampleSize',
            'sampleWeighted',
            'scan',
            'setAt',
            'shuffle',
            'sliding',
            'some',
            'sortBy',
            'sortWith',
            'sortedIndex',
            'sortedUnique',
            'span',
            'splitAt',
            'splitWhen',
            'startsWith',
            'sum',
            'sumBy',
            'swap',
            'tail',
            'take',
            'takeRight',
            'takeUntil',
            'takeWhile',
            'tap',
            'times',
            'transpose',
            'union',
            'unionBy',
            'unionWith',
            'unique',
            'uniqueBy',
            'uniqueWith',
            'unzip',
            'unzipWith',
            'updateAt',
            'without',
            'xor',
            'xorBy',
            'zip',
            'zipLongest',
            'zipMany',
            'zipObject',
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
