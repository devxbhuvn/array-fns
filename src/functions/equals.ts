import { sameValueZero } from '../utils/equality';

/** Shallow array equality using SameValueZero per index. */
export function equals<T>(first: readonly T[], second: readonly T[]): boolean {
    if (first.length !== second.length) {
        return false;
    }

    for (let index = 0; index < first.length; index += 1) {
        if (!sameValueZero(first[index], second[index])) {
            return false;
        }
    }

    return true;
}
