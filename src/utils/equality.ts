export function sameValueZero(a: unknown, b: unknown): boolean {
    return a === b || (typeof a === 'number' && typeof b === 'number' && Number.isNaN(a) && Number.isNaN(b));
}
