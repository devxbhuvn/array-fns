import { describe, expect, it } from 'vitest';
import { replace } from '../src';

describe('replace', () => {
    it('replaces the first match with a value', () => {
        expect(replace([1, 2, 3, 2], (value) => value === 2, 9)).toEqual([1, 9, 3, 2]);
    });

    it('supports an updater', () => {
        expect(
            replace(
                [1, 2, 3],
                (value) => value === 2,
                (value) => value * 10
            )
        ).toEqual([1, 20, 3]);
    });

    it('copies when nothing matches', () => {
        const input = [1, 2];
        const result = replace(input, (value) => value === 9, 0);
        expect(result).toEqual([1, 2]);
        expect(result).not.toBe(input);
    });
});
