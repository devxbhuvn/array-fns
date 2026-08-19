/**
 * Returns a shuffled copy of the array using the Fisher-Yates algorithm.
 *
 * @param array - The input values.
 * @returns A new shuffled array.
 */
export function shuffle<T>(array: readonly T[]): T[] {
    const result = [...array];

    for (let index = result.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        const current = result[index]!;
        const swap = result[swapIndex]!;
        result[index] = swap;
        result[swapIndex] = current;
    }

    return result;
}
