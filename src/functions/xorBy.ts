import type { Selector } from '../types/common';

/** Symmetric difference by selector key, preserving first-seen items. */
export function xorBy<T, K extends PropertyKey>(first: readonly T[], second: readonly T[], selector: Selector<T, K>): T[] {
    const firstMap = new Map<K, T>();
    const secondMap = new Map<K, T>();

    for (let index = 0; index < first.length; index += 1) {
        const item = first[index]!;
        const key = selector(item, index, first);
        if (!firstMap.has(key)) {
            firstMap.set(key, item);
        }
    }

    for (let index = 0; index < second.length; index += 1) {
        const item = second[index]!;
        const key = selector(item, index, second);
        if (!secondMap.has(key)) {
            secondMap.set(key, item);
        }
    }

    const result: T[] = [];

    for (const [key, item] of firstMap) {
        if (!secondMap.has(key)) {
            result.push(item);
        }
    }

    for (const [key, item] of secondMap) {
        if (!firstMap.has(key)) {
            result.push(item);
        }
    }

    return result;
}
