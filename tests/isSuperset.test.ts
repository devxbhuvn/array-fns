import { describe, expect, it } from 'vitest';
import { isSuperset } from '../src';

describe('isSuperset', () => {
    it('checks superset membership', () => {
        expect(isSuperset([1, 2, 3], [1, 2])).toBe(true);
        expect(isSuperset([1, 2], [1, 4])).toBe(false);
    });
});
