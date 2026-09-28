import { describe, expect, it } from 'vitest';
import { startsWith } from '../src';

describe('startsWith', () => {
    it('checks a prefix', () => {
        expect(startsWith([1, 2, 3], [1, 2])).toBe(true);
        expect(startsWith([1, 2], [1, 3])).toBe(false);
    });
});
