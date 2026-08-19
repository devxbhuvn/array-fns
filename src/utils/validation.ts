export function ensurePositiveInteger(value: number, label: string): void {
    if (!Number.isInteger(value) || value <= 0) {
        throw new RangeError(`${label} must be a positive integer.`);
    }
}

export function ensureNonNegativeInteger(value: number, label: string): void {
    if (!Number.isInteger(value) || value < 0) {
        throw new RangeError(`${label} must be a non-negative integer.`);
    }
}

export function ensureFiniteNumber(value: number, label: string): void {
    if (!Number.isFinite(value)) {
        throw new TypeError(`${label} must be a finite number.`);
    }
}
