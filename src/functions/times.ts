import { ensureNonNegativeInteger } from '../utils/validation';

/** Creates an array of length `count` by invoking `iteratee` with each index. */
export function times<T>(count: number, iteratee: (index: number) => T): T[] {
    ensureNonNegativeInteger(count, 'count');
    const result: T[] = [];

    for (let index = 0; index < count; index += 1) {
        result.push(iteratee(index));
    }

    return result;
}
