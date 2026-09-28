import { describe, expect, it } from 'vitest';
import { endsWith } from '../src';

describe('endsWith', () => {
    it('checks a suffix', () => {
        expect(endsWith([1, 2, 3], [2, 3])).toBe(true);
        expect(endsWith([1, 2], [1, 3])).toBe(false);
    });
});
