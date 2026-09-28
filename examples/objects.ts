import { countBy, groupBy, keyBy, maxBy, orderBy, unique } from '../src';

interface User {
    id: number;
    name: string;
    role: string;
    age: number;
}

const users: User[] = [
    { id: 1, name: 'Alice', role: 'admin', age: 30 },
    { id: 2, name: 'Bob', role: 'user', age: 25 },
    { id: 3, name: 'Charlie', role: 'admin', age: 35 },
    { id: 1, name: 'Alice', role: 'admin', age: 30 }
];

console.log(groupBy(users, (user: User) => user.role));
console.log(keyBy(users, (user: User) => user.id));
console.log(unique(users, (user: User) => user.id));
console.log(orderBy(users, [(user: User) => user.age], ['desc']));
console.log(maxBy(users, (user: User) => user.age));
console.log(countBy(users, (user: User) => user.role));
