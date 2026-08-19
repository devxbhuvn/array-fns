import { chunk, compact, unique, range } from '@devxbhuvn/array-fns';

const numbers = [1, 2, 2, 3, 0, false, 4];

console.log(chunk(numbers, 2));
console.log(compact(numbers));
console.log(unique(numbers));
console.log(range(5));
