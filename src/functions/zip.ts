/**
 * Combines two arrays into a list of tuples.
 *
 * @param first - The first array.
 * @param second - The second array.
 * @returns A tuple array of matching positions from both arrays.
 */
export function zip<A, B>(first: readonly A[], second: readonly B[]): Array<[A, B]> {
    const length = Math.min(first.length, second.length);
    const result: Array<[A, B]> = [];

    for (let index = 0; index < length; index += 1) {
        const left = first[index]!;
        const right = second[index]!;
        result.push([left, right]);
    }

    return result;
}
