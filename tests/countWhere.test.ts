import { describe, expect, it } from 'vitest';
import { countWhere } from '../src';

describe('countWhere', () => {
    it('counts matching items', () => {
        expect(countWhere([1, 2, 3, 4], (value) => value % 2 === 0)).toBe(2);
    });

    it('returns 0 when nothing matches', () => {
        expect(countWhere([1, 3], (value) => value % 2 === 0)).toBe(0);
    });
});
