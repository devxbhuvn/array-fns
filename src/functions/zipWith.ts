/**
 * Combines two arrays with a mapper function.
 *
 * @param first - The first array.
 * @param second - The second array.
 * @param mapper - A function that combines the values.
 * @returns A new array of mapped values.
 */
export function zipWith<A, B, R>(first: readonly A[], second: readonly B[], mapper: (left: A, right: B) => R): R[] {
    const length = Math.min(first.length, second.length);
    const result: R[] = [];

    for (let index = 0; index < length; index += 1) {
        const left = first[index]!;
        const right = second[index]!;
        result.push(mapper(left, right));
    }

    return result;
}
