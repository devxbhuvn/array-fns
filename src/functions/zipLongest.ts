/** Zips arrays to the longest length, padding missing values with `undefined`. */
export function zipLongest<A, B>(first: readonly A[], second: readonly B[]): Array<[A | undefined, B | undefined]> {
    const length = Math.max(first.length, second.length);
    const result: Array<[A | undefined, B | undefined]> = [];

    for (let index = 0; index < length; index += 1) {
        result.push([first[index], second[index]]);
    }

    return result;
}
