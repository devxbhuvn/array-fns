import { describe, expect, it } from 'vitest';
import { compactMap } from '../src';

describe('compactMap', () => {
    it('maps and drops nullish results', () => {
        expect(compactMap([1, 2, 3, 4], (value) => (value % 2 === 0 ? value * 2 : null))).toEqual([4, 8]);
    });
});
