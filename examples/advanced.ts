import { flatten, groupToMap, keyBy, orderBy, partition, sliding, stdDev, sumBy, xor, zipWith } from '../src';

const nested = [1, [2, [3, [4]]], 5];
console.log(flatten(nested, Infinity));

const values = [1, 2, 3, 4, 5];
console.log(partition(values, (value) => value % 2 === 0));
console.log(sliding(values, 2));
console.log(xor([1, 2, 3], [2, 4]));
console.log(stdDev([2, 4, 4, 4, 5, 5, 7, 9]));

console.log(zipWith([1, 2, 3], ['a', 'b', 'c'], (left, right) => `${left}:${right}`));

const records: Array<{ id: number; name: string; score: number }> = [
    { id: 2, name: 'Zoe', score: 10 },
    { id: 1, name: 'Ana', score: 20 }
];

console.log(orderBy(records, [(record) => record.score], ['desc']));
console.log(keyBy(records, (record) => record.id));
console.log(groupToMap(records, (record) => record.score > 15));
console.log(sumBy(records, (record) => record.score));
