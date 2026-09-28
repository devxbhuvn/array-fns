import { describe, expect, it } from 'vitest';
import { compactBy } from '../src';

describe('compactBy', () => {
    it('removes values matching the predicate', () => {
        expect(compactBy([1, null, 2], (value) => value == null)).toEqual([1, 2]);
    });
});
