import { describe, expect, it } from 'vitest';
import { none } from '../src';

describe('none', () => {
    it('returns true when nothing matches', () => {
        expect(none([1, 3, 5], (value) => value % 2 === 0)).toBe(true);
        expect(none([1, 2], (value) => value % 2 === 0)).toBe(false);
    });
});
