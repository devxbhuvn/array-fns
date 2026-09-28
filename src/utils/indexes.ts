/** Normalizes a fromIndex like Array.prototype.includes / findIndex. */
export function normalizeFromIndex(fromIndex: number, length: number): number {
    const normalizedIndex = Number.isNaN(fromIndex) ? 0 : Math.trunc(fromIndex);
    return normalizedIndex < 0 ? Math.max(length + normalizedIndex, 0) : normalizedIndex;
}

/** Clamps an index into `[0, length]` for insert-style operations. */
export function clampInsertIndex(index: number, length: number): number {
    if (!Number.isFinite(index)) {
        throw new TypeError('index must be a finite number.');
    }

    const truncated = Math.trunc(index);
    if (truncated < 0) {
        return Math.max(length + truncated, 0);
    }

    return Math.min(truncated, length);
}
