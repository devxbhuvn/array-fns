import { describe, expect, it } from 'vitest';
import { isEmpty } from '../src';

describe('isEmpty', () => {
    it('detects empty arrays', () => {
        expect(isEmpty([])).toBe(true);
        expect(isEmpty([1])).toBe(false);
    });
});
