import { describe, expect, it } from 'vitest';
import { nth } from '../src';

describe('nth', () => {
    it('aliases at', () => {
        expect(nth([10, 20], -1)).toBe(20);
    });
});
