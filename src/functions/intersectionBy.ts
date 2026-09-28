import type { Selector } from '../types/common';

/** Returns unique values from `first` whose selector keys appear in `second`. */
export function intersectionBy<T, K extends PropertyKey>(first: readonly T[], second: readonly T[], selector: Selector<T, K>): T[] {
    const secondKeys = new Set<K>();

    for (let index = 0; index < second.length; index += 1) {
        secondKeys.add(selector(second[index]!, index, second));
    }

    const result: T[] = [];
    const seen = new Set<K>();

    for (let index = 0; index < first.length; index += 1) {
        const item = first[index]!;
        const key = selector(item, index, first);

        if (secondKeys.has(key) && !seen.has(key)) {
            seen.add(key);
            result.push(item);
        }
    }

    return result;
}
