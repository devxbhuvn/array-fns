import { flatten, partition, zipWith, sortBy } from '../src';

const nested = [1, [2, [3, [4]]], 5];
console.log(flatten(nested, Infinity));

const values = [1, 2, 3, 4, 5];
console.log(partition(values, (value) => value % 2 === 0));

console.log(zipWith([1, 2, 3], ['a', 'b', 'c'], (left, right) => `${left}:${right}`));

const records: Array<{ id: number; name: string }> = [
    { id: 2, name: 'Zoe' },
    { id: 1, name: 'Ana' }
];

console.log(sortBy(records, (record: { id: number; name: string }) => record.name));
